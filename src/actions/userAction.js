export const createAction = () => dispatch => {
    dispatch({
        type: 'CREATE_ACTION',
        payload: 'result_of_create_action'
    })
}

export const clearAction = () => dispatch => {
    dispatch({
        type: 'CLEAR_ACTION',
        payload: ''
    })
}