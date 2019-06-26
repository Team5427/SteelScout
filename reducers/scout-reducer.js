

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
      case 'UPDATE_TEAM':
        return {
          ...state,
          team: action.team,
        }
      case 'UPDATE_MATCH':
        return {
          ...state,
          match: action.match,
        }
      case 'UPDATE_COLOR':
        return {
          ...state,
         color: action.color,
        }
      case 'UPDATE_SIDE':
        return {
          ...state,
          side: action.side,
        }
      case 'CLEAR_SCOUT':
        return {}
      default:
        return state
    }
  }
