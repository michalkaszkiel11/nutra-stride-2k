import { Menu } from "../Menu";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const WorkoutLevel = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState([]);
    const [role, setRole] = useState([]);

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
    // const getRoles = async (lvlId) => {
    //     try {
    //         const response = await axios.get(
    //             `http://localhost:10000/api/ns/regular/roles/${lvlId}`
    //         );
    //         const role = response.data.data;
    //         setRole(role);
    //     } catch (error) {
    //         console.log("Unable to send data to the server");
    //     }
    // };
    // const handleLevelClick = (lvlId) => {
    //     // getRoles(lvlId);
    //     navigate(`/regular/workout-level/${lvlId}`);
    // };
    return (
        <div className="workout-box">
            <Menu />
            <h1>Choose your level : </h1>
            <div className="level-box">
                {level.map((lvl) => (
                    <div className="level-card" key={lvl.level}>
                        <h2>{lvl.level}</h2>
                        {/* <button
                            className="btn"
                            onClick={() => getLevels(lvl.id)}
                        >
                            Choose
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
