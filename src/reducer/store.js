import { configureStore } from '@reduxjs/toolkit'
import upgradeWebSocketReducer from '../reducer/reducer'

export default configureStore({
    reducer: {
        websocket: upgradeWebSocketReducer
    }
})