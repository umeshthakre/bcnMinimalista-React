import * as ActionTypes from './ActionTypes';
import { INFORM } from "../shared/inform";
import { HOME } from "../shared/home";

export const addComment = (id, name, forum, message, date) =>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        id: id, 
        name: name,
        forum: forum, 
        message: message, 
        date: date
    }
})

export const fetchInform = () => dispatch => {
    dispatch(informLoading());
    setTimeout(() => {
        dispatch(addInform(INFORM))
    }, 0)
}
// export const fetchInform = () => dispatch => {
//     dispatch(addInform(INFORM));
// }


export const informLoading = () => ({
    type: ActionTypes.INFORM_LOADING
});

export const informFailed = errMess => ({
    type: ActionTypes.INFORM_FAILED,
    payload: errMess
});

export const addInform = inform => ({
    type: ActionTypes.ADD_INFORM,
    payload: inform
});

export const fetchHome = () => dispatch => {
    dispatch(homeLoading());
    setTimeout(() => {
        dispatch(addHome(HOME))
    }, 2000)
}

export const homeLoading = () => ({
    type: ActionTypes.HOME_LOADING
});

export const homeFailed = errMess => ({
    type: ActionTypes.HOME_FAILED,
    payload: errMess
});

export const addHome = home => ({
    type: ActionTypes.ADD_HOME,
    payload: home
});


