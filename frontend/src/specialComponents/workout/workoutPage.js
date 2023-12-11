import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./workout.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { getVideoId } from "../helper/getVideo.js";
import YouTube from 'react-youtube';


const WorkoutPage = () => {
  const [workout, setWorkout] = useState(null);
  const { conditionId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:10000/api/ns/special/conditions-with-workouts/${conditionId}`
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
    <div className={styles.workoutPage}>
      {workout ? (
        <div key={workout._id} className={styles.workoutContainer}>
          <h1>{workout.workoutTitle}</h1>
          <p>{workout.workoutDesc}</p>

          <div className={styles.content}>
          {workout.workoutVideo && (
              <YouTube
                videoId={getVideoId(workout.workoutVideo)} 
                className={styles.workoutVideo}
                opts={{
                  width: '150%',
                  height: '500', 
                    playerVars: {
                    autoplay: 0,
                    controls: 1,
                  },
                }}
              />
            )}
            <div className={styles.imageWrapper}>
              {workout.workoutImage && (
                <img
                  src={workout.workoutImage}
                  alt="Workout"
                  className={styles.workoutImage}
                />
              )}
              <p className={styles.advice}>"{workout.advice}"</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No workouts found.</p>
      )}

      <button className={styles.backToChoose} onClick={backToChoose}>
        Back
      </button>
    </div>
  );
};

export default WorkoutPage;
