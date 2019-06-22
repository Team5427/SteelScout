export default function (state = null, action) {
    switch (action.type) {
        case 'AUTHENTICATE':
            return action.payload;
        default:
            return state;
    }
    return state;
}