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

    const webSocketRoom = useSelector((state) => state.websocket.value);
    const [players, setPlayers] = useState([]);
    const [uuid, setUuid] = useState([]);
    const [index, setIndex] = useState(0);

    const handler = (event) => {
        event.preventDefault();
        if (index < 2) {
            if (ESCAPE_KEYS.includes(String(event.key))) {

            }
            if (UP_KEYS.includes(String(event.key))) {
                webSocketRoom.send(JSON.stringify({ uuid: uuid, message: 'UP' }));
            }
            if (DOWN_KEYS.includes(String(event.key))) {
                webSocketRoom.send(JSON.stringify({ uuid: uuid, message: 'DOWN' }));
            }
            if (LEFT_KEYS.includes(String(event.key))) {
                webSocketRoom.send(JSON.stringify({ uuid: uuid, message: 'LEFT' }));
            }
            if (RIGHT_KEYS.includes(String(event.key))) {
                webSocketRoom.send(JSON.stringify({ uuid: uuid, message: 'RIGHT' }));
            }
        }

    }

    useEventListener('keydown', handler);

    useEffect(() => {
        if (webSocketRoom) {
            webSocketRoom.onmessage = (response) => {
                let parsedResponse = JSON.parse(response.data);
                if (parsedResponse.uuid) {
                    setUuid(parsedResponse.uuid);
                    setIndex(parsedResponse.index)
                } else {
                    setPlayers([parsedResponse.first, parsedResponse.second]);
                }
            }
        }
    }, [])


    return (
        <>
            {(index > 1) && <div>SPECTATOR MODE</div>}
            <Canvas players={players} uuid={uuid}>
            </Canvas>
        </>

    )
}
