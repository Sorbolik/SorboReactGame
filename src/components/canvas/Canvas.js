import React, { useEffect, useRef, useState } from 'react'
import { Player } from '../Player/Player';

const Canvas = ({ players, uuid }) => {

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [updateMovement, setUpdateMovement] = useState({ asd: 'das' });

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setContext(canvas.getContext('2d'));
    }, [])

    useEffect(() => {
        console.log(players);
        setUpdateMovement({ asd: 'das' });
        return () => {
            if (context) {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            }
        }
    }, [players])

    return <canvas ref={canvasRef}>
        {players && players.map((elem, i) => {
            // if (elem !== 'SPECTATOR') {
            return <Player key={i}
                x={elem?.x}
                y={elem?.y}
                canvasContext={context}
                color={i === 0 ? 'red' : 'green'}
                radius={30}
                updateMovement={updateMovement}>
            </Player>
            // }

        })}
    </canvas >
}
Canvas.defaultProps = {
    players: [{ x: window.innerWidth, y: window.innerHeight }, { x: window.innerWidth, y: window.innerHeight }]
}

export default Canvas;