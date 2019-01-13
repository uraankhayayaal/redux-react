import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

/*
 * src/store.js
 * No initialState
 */
// export default function configureStore() {
//  return createStore(
//   rootReducer,
//    applyMiddleware(thunk)
//  );
// }

/*
 * src/store.js
 * With initialState
 */
export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}