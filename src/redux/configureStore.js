import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Collab } from './collab';
import { Comments } from './comments';
import { Home } from './home';
import { Inform } from './inform';
import { ReduceProducts } from './reduceproducts';
import { ReduceTips } from './reducetips';
import { ReduceWaste } from './reducewaste';
import { Tools } from './tools';
import { InitialCollab } from './forms';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            collab: Collab,
            comments: Comments,
            home: Home, 
            inform: Inform,
            products: ReduceProducts,
            tips: ReduceTips,
            waste: ReduceWaste, 
            tools: Tools,
            ...createForms({
                collabForm: InitialCollab
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};