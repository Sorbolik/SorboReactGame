// const initialState = {
//     webSocket: null
// }
// // // Use the initialState as a default value
// // export function appReducer(state = initialState, action) {
// //     // The reducer normally looks at the action type field to decide what happens
// //     switch (action.type) {
// //         // Do something here based on the different types of actions
// //         case 'websocketInit': {
// //             return {
// //                 ...state,
// //                 webSocket: action.payload
// //             }

// //         } default:
// //             // If this reducer doesn't recognize the action type, or doesn't
// //             // care about this specific action, return the existing state unchanged
// //             return state
// //     }
// // }

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case 'WEB_SOCKET_CHANGE':
//             return state.concat([action.websocket])
//         default:
//             return state
//     }
// }


import { createSlice } from '@reduxjs/toolkit'

export const webSocket = createSlice({
    name: 'websocket',
    initialState: {
        value: null,
    },
    reducers: {
        upgradeWebSocket: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { upgradeWebSocket } = webSocket.actions

export default webSocket.reducer
