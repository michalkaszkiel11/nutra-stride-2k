// Exercises.jsx
import React, { useState, useEffect } from "react";
import { Menu } from "../Menu";
import axios from "axios";
import { useParams } from "react-router-dom";

// import { backgroundStyles } from "./helpers/ClaudinaryBgImage.js";

export const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const { roleId } = useParams();
    // const linkImg = [
    //     "regularWorkout/Exercises/sw2xbjjzp1emioa6znrl",
    //     "regularWorkout/Exercises/olhbq13srxpxf97wzjsa",
    //     "regularWorkout/Exercises/epzsuqfvfiiehjdxv6jt",
    // ];
    // const bgImage = backgroundStyles(linkImg);

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
                            <h3>Intro:</h3>
                            <p>{exercise.description[0]}</p>
                            <h2>Description:</h2>
                            <ul>
                                {exercise.description
                                    .slice(1)
                                    .map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                            </ul>
                        </div>
                        <div className="level">
                            <h2>Difficulty level:</h2>
                            <p>Beginner render form data</p>
                        </div>
                        <img
                            src={exercise.image}
                            alt={index}
                            className="image"
                        ></img>
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
