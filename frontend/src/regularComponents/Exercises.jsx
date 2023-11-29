// Exercises.jsx
import React, { useState, useEffect } from "react";
import { Menu } from "../Menu";
import YouTube from "react-youtube";
import { getYouTubeVideoId } from "./helpers/youtubeVideo";
import { useParams } from "react-router-dom";
import apiInstance from "../utils/axiosInstance";

export const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [roles, setRoles] = useState({});
    const { roleId } = useParams();
    const inst = apiInstance();

    useEffect(() => {
        getExercises(roleId);
        level(roleId);
    }, [roleId]);

    const getExercises = async (roleId) => {
        try {
            const response = await inst.get(
                `/regular/workout-level/exercises/${roleId}`
            );
            const exercisesData = response.data.data;
            setExercises(exercisesData);
        } catch (error) {
            console.error(error);
        }
    };
    const level = async (roleId) => {
        try {
            const response = await inst.get(
                `/regular/workout-level/roles/${roleId}`
            );
            const rolesData = response.data.data.title;
            console.log(rolesData);
            setRoles(rolesData);
        } catch (error) {
            console.error(error);
        }
    };
    const setLevel = (title) => {
        if (title.includes("1")) {
            return "Beginner";
        } else if (title.includes("2")) {
            return "Intermediate";
        } else if (title.includes("3")) {
            return "Advanced";
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
                            <p>{setLevel(roles)}</p>
                        </div>
                        <img
                            src={exercise.image}
                            alt={index}
                            className="image"
                        ></img>
                        <div className="videos">
                            {exercise.video.map((video, videoIndex) => (
                                <div key={videoIndex}>
                                    <YouTube
                                        frameBorder="0"
                                        allowFullScreen={true}
                                        videoId={getYouTubeVideoId(video)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
