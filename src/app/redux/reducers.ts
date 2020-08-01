import { ADD_NUMBER, REMOVE_NUMBER } from './actions'; 

const initialState = {
  currentNumber: 0
}

function mathApp(state = initialState, action) {
  switch(action.type) {
    case ADD_NUMBER : 
      return {
        currentNumber: state.currentNumber + action.n
      }
    case REMOVE_NUMBER :
      return {
        currentNumber: state.currentNumber - action.n
      }
    default:
      return state;
  }
}

export default mathApp;