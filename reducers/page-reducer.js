export default function (state = null, action) {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return action.payload;
        default:
            return state;
    }
    return state;
}
