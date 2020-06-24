import { combineReducers } from 'redux'
import { settingsReducer } from '../application/settings/reducer'

const reducer = combineReducers({
  settings: settingsReducer
})

export default reducer
