export default (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_ACTION':
            return {
                result: action.payload
            }
        case 'CLEAR_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}