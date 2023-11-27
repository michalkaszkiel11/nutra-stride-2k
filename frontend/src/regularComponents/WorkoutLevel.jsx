import { Menu } from "../Menu";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { backgroundStyles } from "./helpers/ClaudinaryBgImage";

export const WorkoutLevel = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState([]);
    const linkImg = [
        "regularWorkout/Levels/dpspejxuhurafl6flhyt",
        "regularWorkout/Levels/ic5c6ugdexb2i5zhxm71",
        "regularWorkout/Levels/m4ovho72rslvnyuyirid",
    ];
    const bgImage = backgroundStyles(linkImg);

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
            <div className="intro">
                <h1>Elevate your fitness experience to new heights... </h1>
                <p>
                    By choosing your preferred difficulty. Whether you're a
                    beginner looking to start your fitness journey, an
                    intermediate enthusiast seeking a challenge, or an advanced
                    athlete pushing your limits, we have the perfect workout
                    level for you. Pick a level below and become a healthier and
                    stronger you!
                </p>
            </div>
            <div className="image"></div>
            <div className="level-box">
                {level.map((lvl, index) => (
                    <div
                        className="level-card"
                        key={lvl.level}
                        onClick={() => handleLevelClick(lvl._id)}
                    >
                        <h2>{lvl.level}</h2>

                        <div className="bgImg" style={bgImage[index]}></div>
                        <button className="button">Choose</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
