

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
      default:
        return state
    }
  }
