export default function (state = null, action) {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return action.payload;
        default:
            return state;
    }
    return state;
}