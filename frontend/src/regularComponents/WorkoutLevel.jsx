import { Menu } from "../Menu";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const WorkoutLevel = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState([]);

    useEffect(() => {
        getLevels();
    }, []);

    const getLevels = async () => {
        try {
            const response = await axios.get(
                "http://localhost:10000/api/ns/regular/workout-level"
            );
            const level = response.data.data;
            setLevel(level);
        } catch (error) {
            console.log("Unable to send data to the server");
        }
    };

    const handleLevelClick = (lvlId) => {
        // getRoles(lvlId);
        navigate(`/regular/workout-level/${lvlId}`);
    };

    return (
        <div className="workout-box">
            <Menu />
            <h1>Choose your level : </h1>
            <div className="level-box">
                {level.map((lvl, index) => (
                    <div className="level-card" key={lvl.level}>
                        <h2>{lvl.level}</h2>
                        <button
                            className="button"
                            onClick={() => handleLevelClick(lvl._id)}
                        >
                            Choose
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
