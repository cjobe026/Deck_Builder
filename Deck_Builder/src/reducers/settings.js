import { PAGE_ARRAY } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/todofilters'


const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]
const Settings = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_ARRAY:
      return action.filter
    default:
      return state
  }
}

export default Settings