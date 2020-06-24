import { Middleware, MiddlewareAPI, Dispatch } from 'redux'
import { ActionTypes } from '../store/actions'

export const logger: Middleware = (store: MiddlewareAPI) => (
  next: Dispatch<ActionTypes>
) => (action: ActionTypes) => {
  console.log('logger: Dispatching ', action)
  const result = next(action)
  console.log('logger: next state ', store.getState())
  return result
}
