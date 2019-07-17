import { ADD_DECK } from '../constants/ActionTypes'



const initialState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ]
const Decks = (state = initialState,  action) => {
  switch (action.type) {
    case ADD_DECK:
      return action.filter
    default:
      return state
  }
}

export default Decks