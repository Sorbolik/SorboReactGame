import React, { useEffect, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { useSelector } from 'react-redux'
import Canvas from '../../components/canvas/Canvas';

export const GamePage = () => {
    const ESCAPE_KEYS = ['27', 'Escape'];
    const UP_KEYS = ['119', '87', 'w', 'W'];
    const DOWN_KEYS = ['115', '83', 's', 'S'];
    const LEFT_KEYS = ['97', '65', 'a', 'A'];
    const RIGHT_KEYS = ['100', '68', 'd', 'D'];

    const webSocketInstance = useSelector((state) => state.websocket.value);
    const [updateMovement, setUpdateMovement] = useState({ asd: 'das' });
    const [movement, setMovement] = useState('');

    const handler = (event) => {
        event.preventDefault();
        if (ESCAPE_KEYS.includes(String(event.key))) {

        }
        if (UP_KEYS.includes(String(event.key))) {
            webSocketInstance.send('UP')
        }
        if (DOWN_KEYS.includes(String(event.key))) {
            webSocketInstance.send('DOWN')
        }
        if (LEFT_KEYS.includes(String(event.key))) {
            webSocketInstance.send('LEFT')
        }
        if (RIGHT_KEYS.includes(String(event.key))) {
            webSocketInstance.send('RIGHT')
        }
    }

    useEventListener('keydown', handler);

    useEffect(() => {
        if (webSocketInstance) {
            webSocketInstance.onmessage = (message) => {
                setMovement(message.data);
                setUpdateMovement({ asd: 'das' });
            }
        }
    }, [])

    return (
        <><div>Game Page</div>
            <Canvas movement={movement} updateMovement={updateMovement}>
            </Canvas>
        </>

    )
}
