import React, { useEffect, useRef, useState } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    let [deltaX, setDeltaX] = useState(0);
    let [deltaY, setDeltaY] = useState(0);

    const draw = () => {
        if (context) {
            context.fillStyle = 'red';
            context.fillRect(30 + deltaX, 30 + deltaY, 50, 50);
        }
    }
    useEffect(() => {
        draw()
    }, [deltaY, deltaX])

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setContext(canvas.getContext('2d'));
    }, [])

    useEffect(() => {
        console.log(props.movement);
        if (context) {
            context.clearRect(30 + deltaX, 30 + deltaY, 50, 50);
        }
        switch (props.movement) {
            case 'UP':
                setDeltaY(deltaY - 3);
                break;
            case 'DOWN':
                setDeltaY(deltaY + 3);
                break;
            case 'LEFT':
                setDeltaX(deltaX - 3);
                break;
            case 'RIGHT':
                setDeltaX(deltaX + 3);
                break;
            default:
                break;
        }
    }, [props.updateMovement])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas;