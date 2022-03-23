import * as ActionTypes from './ActionTypes';

export const Inform = (state = {
    isLoading: true,
    errMess: null, 
    inform: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INFORM:
            return{...state, isLoading: false, errMess: null, inform: action.payload}
        case ActionTypes.INFORM_LOADING:
            return{...state, isLoading:true, errMess:null, inform: []};
        case ActionTypes.INFORM_FAILED:
            return {...state, isLoading:true, errMess: action.payload}

        default:
            return state;
    }
}