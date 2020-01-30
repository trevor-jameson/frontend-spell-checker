import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
      applyMiddleware(thunk),
  )
);

// Enable to log all updates to the redux store
// store.subscribe(() => {
//   console.log('store changed', store.getState())
// })
