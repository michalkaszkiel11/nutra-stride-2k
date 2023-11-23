import React from 'react';
import styles from './chooseDietOrWorkout.module.scss';
import {useNavigate} from 'react-router-dom';

const ChooseDietOrWorkout = () => {
    let navigate = useNavigate();

    const goToDiet = () => {
        navigate('/diet');
    };

    const goToWorkout = () => {
        navigate('/workout');
    };

    return (
        <div className={styles.chooseDietOrWorkout}>
            <h1 className={styles.title}>Let's Personalize Your Experience</h1>
            <div className={styles.options}>
                <button onClick={goToDiet} className={styles.optionButton}>Diet Plan</button>
                <button onClick={goToWorkout} className={styles.optionButton}>Workout Routine</button>
            </div>
        </div>
    );
};

export default ChooseDietOrWorkout;