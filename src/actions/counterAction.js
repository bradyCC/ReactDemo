/**
 * Created by brady on 2019/2/23.
 */
import { FETCH_COUNTER } from "./types"

export let counterAction = () => {
  console.log('actions')
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_COUNTER,
        payload: data
      }))
  }
}

