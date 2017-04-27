
import {fromJS, Map} from 'immutable'

export const INITIAL_STATE = fromJS({
  Data: []
})

const fetchDataURL = 'https://api.myjson.com/bins/gx6vz'

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setData":
      return state.set("Data", action.data)
  }
  return state;
}

export function fetchData() {
  return dispatch => {
     fetch(fetchDataURL)
       .then( response => response.json())
       .then( json => {
        dispatch({type:"setData", data: json})
       })
  }
}