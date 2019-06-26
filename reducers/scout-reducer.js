

export default function(state = {}, action){
    switch(action.type) {
      case 'UPDATE_VALUE':
        return {
          ...state,
          values: {
            ...state.values,
            [action.name]: action.value,
          }
        }
      case 'UPDATE_CLIMB':
        return {
          ...state,
          climb: action.climb,
        }
      case 'UPDATE_DESCEND':
        return {
          ...state,
          descend: action.descend,
        }
      default:
        return state
    }
  }
