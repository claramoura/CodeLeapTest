import { combineReducers } from "redux";

const submitPostReducer = (state={}, action) => {
    switch (action.type) {
      case 'submitPost/request':
        return { loading: true }
  
      case 'submitPost/success':
        return { loading: false, success: true, data: action.payload }
  
      case 'submitPost/fail':
        return { loading: false, error: action.payload }
  
      default:
        return state
    }
}

const deletePostReducer = (state={}, action) => {
  switch (action.type) {
    case 'deletePost/request':
      return { loading: true }

    case 'deletePost/success':
      return { loading: false, success: true }

    case 'deletePost/fail':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

const editPostReducer = (state={}, action) => {
  switch (action.type) {
    case 'editPost/request':
      return { loading: true }

    case 'editPost/success':
      return { loading: false, success: true }

    case 'editPost/fail':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const reducers = combineReducers({
    submitPostReducer,
    deletePostReducer,
    editPostReducer,
});