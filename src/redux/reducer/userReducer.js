import { createReducer } from "@reduxjs/toolkit"

// const initial = {
//     loading: false,
//     reducerAbout: ""
// }

// export const userReducer = createReducer(initial, {
//     GET_USER_REQUEST: (state) => {
//         state.loading = true
//     },
//     GET_USER_SUCCESS: (state, action) => {
//         state.loading = false;
//         state.reducerAbout = action.payload;
//     },
//     GET_USER_ERROR: (state, action) => {
//         state.loading = true;
//         state.error = action.payload;
//     }
// })

// export const postAboutReducer = createReducer(initial, {
//     POST_USER_REQUEST: (state) => {
//         state.loading = true;
//     },
//     POST_USER_SUCCESS: (state, action) => {
//         state.loading = false;
//         state.reducerAbout = action.payload;
//     },
//     POST_USER_ERROR: (state, action) => {
//         state.loading = true;
//         state.reducerAbout = action.payload;
//     }
// })

const initial = {
    isAuth: localStorage.getItem("token") ? true : false
}

export const authentication = createReducer(initial, {
    AUTH: (state, action) => {
        state.isAuth = action.payload;
    }
})