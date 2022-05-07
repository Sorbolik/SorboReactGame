import React, { useEffect } from 'react'

export const Player = ({ x, y, radius, color, canvasContext, updateMovement }) => {

    const draw = () => {
        if (canvasContext && x && y) {
            canvasContext.fillStyle = color;
            canvasContext.beginPath();
            canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
            canvasContext.fill();
            canvasContext.closePath();
        }
    }


    useEffect(() => {
        draw();
    }, [x, y, canvasContext, updateMovement])
    return <></>
}
