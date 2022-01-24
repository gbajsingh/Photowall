import Comments from "../Components/Comments"
import {database} from "../database/config"

/* Export all actions to be imported inside App.js where they are mapped as props. 
The actions will be invoked by reducer when accessing props */

// start adding post
export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

// start loading posts
export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []// declared as "let" to access outside below in dispatch
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

// start removing post, also remove post's comments in the database
export function startRemovingPost(index, id) {
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }
    return (dispatch) => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

// start adding comment
export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

// start loading comments
 export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })    
    }

}

// remove post
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}
// add post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}
// add Comment
export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}
// load posts
export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}
// load comments
export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}