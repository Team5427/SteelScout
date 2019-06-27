export default function (state = {authenticated: false}, action) {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                role: action.role,
                authenticated: action.authenticated,
            };
        case 'LOGOUT_SUCCESS':
            return {
                role: action.role,
                authenticated: action.authenticated,
            };
        default:
            return state;
    }
    return state;
}