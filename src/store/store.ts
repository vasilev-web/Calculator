import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import calculateReducer from '@store/calculateReducer';
import calculateValueReducer from '@store/calculateValueReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    calculate: calculateReducer,
    calculateValue: calculateValueReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
