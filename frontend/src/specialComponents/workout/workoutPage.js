import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideoId } from "../helper/getVideo.js";
import YouTube from "react-youtube";
import apiInstance from "../../utils/axiosInstance";
import { Menu } from "../../Menu.jsx";
import { Fade } from "react-awesome-reveal";
const WorkoutPage = () => {
    const [workout, setWorkout] = useState(null);
    const [healthConditions, setHealthConditions] = useState([]);
    const { conditionId } = useParams();

    const inst = apiInstance();
    const getConditions = async () => {
        try {
            const response = await inst.get("/special/health-conditions");
            setHealthConditions(response.data.data);
        } catch (error) {
            console.error("Error fetching health conditions:", error);
        }
    };
    useEffect(() => {
        getConditions();
    }, []);
    useEffect(() => {
        const getWorkouts = async () => {
            try {
                const response = await inst.get(
                    `/special/conditions-with-workouts/${conditionId}`
                );

                const pairs = response.data.data;

                const matchedPair = pairs.find((pair) => {
                    return pair.condition._id === conditionId;
                });

                setWorkout(matchedPair ? matchedPair.workout : null);
            } catch (error) {
                console.error("Error fetching workouts: " + error.message);
            }
        };

        if (conditionId) {
            getWorkouts();
        }
    }, [conditionId]);

    return (
        <div className="workout-page">
            <Menu />
            <Fade
                className="workout-container"
                duration={1500}
                direction="down"
            >
                {workout ? (
                    <div key={workout._id} className="workout-main">
                        <div className="green-holder"></div>
                        <div className="workout-background"></div>
                        <div className="title-black"></div>
                        <div className="workout-black"></div>
                        <h1 className="workout-header">
                            Your health is our priority
                        </h1>
                        <div className="workout-img-box">
                            {healthConditions.map((condition, index) => {
                                if (condition._id === conditionId) {
                                    return (
                                        <img
                                            key={index}
                                            src={condition.image}
                                            alt="Health Condition"
                                            className="dowCondImage"
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                        <p className="advice">"{workout.advice}"</p>
                        <div className="content-video">
                            {workout.workoutVideo && (
                                <YouTube
                                    videoId={getVideoId(workout.workoutVideo)}
                                    className="workout-video"
                                    opts={{
                                        playerVars: {
                                            autoplay: 0,
                                            controls: 1,
                                        },
                                    }}
                                />
                            )}
                        </div>
                        <div className="workout-title-box">
                            <p>{workout.workoutDesc}</p>
                        </div>
                        <h2 className="workout-h2">{workout.workoutTitle}</h2>
                    </div>
                ) : (
                    <div className="loading-spinner"></div>
                )}
            </Fade>
        </div>
    );
};

export default WorkoutPage;
