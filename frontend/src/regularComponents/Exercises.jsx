import React, { useState, useEffect } from "react";
import { Menu } from "../Menu";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const { roleId } = useParams();

    useEffect(() => {
        getExercises(roleId);
    }, [roleId]);

    const getExercises = async (roleId) => {
        try {
            const response = await axios.get(
                `http://localhost:10000/api/ns/regular/workout-level/exercises/${roleId}`
            );
            const exercisesData = response.data.data;
            setExercises(exercisesData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="exercise-box">
            <Menu />
            <div className="exercise-card-box">
                {exercises.map((exercise, index) => (
                    <div key={exercise._id} className="exercise-card">
                        <div className="title">
                            <h2>{exercise.title}</h2>
                            <i className="fa-solid fa-heart-circle-plus"></i>
                        </div>
                        <div className="text">
                            <h3>Introduction</h3>
                            <p>{exercise.description}</p>
                            <p></p>
                        </div>
                        <div className="level">
                            <h2>Difficulty level:</h2>
                            <p>Beginner render form data</p>
                        </div>
                        <div className="image"></div>
                        <div className="videos">
                            <div>video</div>
                            <div>video</div>
                            <div>video</div>
                            <div>video</div>
                            <div>video</div>
                            <div>video</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
