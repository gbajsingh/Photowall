import _posts from '../data/posts'
import {combineReducers} from 'redux'

// ES6 syntax inside {} is [key]: [value 1, value 2,..] */

/* Comments data needs to be defined as key:value pair so it can be access by postID. */

// Therefore, state is initialized as a single empty object that will conatin key:value pairs
function comments(state = {}, action) {
    switch(action.type) {
        case 'ADD_COMMENT': 
        
        if(!state[action.postId]) {// if state is empty
            return {...state, [action.postId]: [action.comment]}// then destructure and append [key]:[value] pair
        } else {// else destructure the state, and set new value(s) to the specfied key by destructuring it's value(s) and appending to it
            return {...state, [action.postId]: [...state[action.postId], action.comment]}
        }

        case 'LOAD_COMMENTS': return action.comments
        default: return state
    }
}

// Here state is initialized as posts data which is an array of objects 
function posts(state = _posts, action) {
    switch(action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_POSTS': return action.posts
        default: return state
    }   
}

const rootReducer = combineReducers({posts, comments})

// export rootReducer to be imported inside index.js to further create redux store
export default rootReducer