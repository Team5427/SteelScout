export default function (state = {authenticated: false}, action) {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                role: action.role,
                authenticated: action.authenticated,
                error: "",
            };
        case 'LOGOUT_SUCCESS':
            return {
                role: action.role,
                authenticated: action.authenticated,
                error: "",
            };
        case 'AUTH_ERROR':
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
    return state;
}