import { combineReducers } from 'redux'
import Cards from './cards'
import Decks from './Decks.js'
import Settings from './settings'

const rootReducer = combineReducers({
  Cards,
  Decks,
  Settings
})

export default rootReducer
