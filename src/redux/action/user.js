export const authentication = (auth) => (dispatch) => {
    dispatch({
        type: "AUTH",
        payload: auth
    })
}   