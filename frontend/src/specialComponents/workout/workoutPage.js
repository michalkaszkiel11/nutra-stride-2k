import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVideoId } from "../helper/getVideo.js";
import YouTube from "react-youtube";
import apiInstance from "../../utils/axiosInstance";

const WorkoutPage = () => {
    const [workout, setWorkout] = useState(null);
    const { conditionId } = useParams();
    const navigate = useNavigate();
    const inst = apiInstance();

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

    const backToChoose = () => {
        navigate("/"); //back to choose diet or workout
    };

    return (
        <div className="workout-page">
            {workout ? (
                <div key={workout._id} className="workout-main">
                    <h1>{workout.workoutTitle}</h1>
                    <p>{workout.workoutDesc}</p>

                    <div className="content">
                        {workout.workoutVideo && (
                            <YouTube
                                videoId={getVideoId(workout.workoutVideo)}
                                className="workout-video"
                                opts={{
                                    width: "150%",
                                    height: "500",
                                    playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                    },
                                }}
                            />
                        )}
                        <div className="workout-img-box">
                            {workout.workoutImage && (
                                <img
                                    src={workout.workoutImage}
                                    alt="Workout"
                                    className="workout-img"
                                />
                            )}
                            <p className="advice">"{workout.advice}"</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="loading-spinner"></div>
            )}
        </div>
    );
};

export default WorkoutPage;
