import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
} from "react-circular-input";
import { useState } from "react";
export const Range = ({ value }) => {
    return (
        <CircularInput value={value} className="range">
            <CircularTrack />
            <CircularProgress />
            <CircularThumb />
        </CircularInput>
    );
};
