import React, { useState, useEffect } from "react";

import { Menu } from "../Menu";
import { useNavigate, useParams } from "react-router-dom";
import apiInstance from "../utils/axiosInstance";
export const WorkoutRoles = () => {
    const navigate = useNavigate();
    const { lvlId } = useParams();
    const [roles, setRoles] = useState([]);
    const inst = apiInstance();
    useEffect(() => {
        const getRoles = async () => {
            try {
                const response = await inst.get(
                    `/regular/workout-level/${lvlId}`
                );
                const rolesData = response.data.data;
                setRoles(rolesData);
            } catch (error) {
                console.error(error);
            }
        };
        getRoles();
    }, [lvlId]);

    const handleRoleClick = (roleId) => {
        navigate(`/regular/workout-level/exercises/${roleId}`);
    };
    return (
        <div className="role-box">
            <Menu />
            <h1>Welcome to first step. Please choose your level</h1>
            <div className="exercises-box">
                {roles.map((role, index) => (
                    <div
                        className="role-card"
                        key={role._id}
                        onClick={() => handleRoleClick(role._id)}
                    >
                        <h2>{role.title}</h2>
                        <img src={role.image} alt={index} />
                        <p>{role.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
