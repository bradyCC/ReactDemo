/**
 * Created by brady on 2019/2/23.
 */
import { FETCH_COUNTER } from "../actions/types"

const defaultState = {
  test: []
}

export const counterReducer = (state = defaultState, action) => {
  console.log('reducers')
  switch(action.type) {
    case FETCH_COUNTER:
      return {
        ...state,
        test: action.payload
      }
    default:
      return state
  }
}
