import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

/* App receives redux store as a passed prop through {Provider} component in index.js */
/* It also receives all the actions from actions.js */

// map the state(objects) living inside the redux store to props
function mapStateToProps(state) {
    return {
        // props
        posts: state.posts,// store.posts will be a property that contains array of objects i.e. [{post}, {post}, ..]
        comments: state.comments// store.comments will be a property that contains [postId(key)] : comment(value) pairs
    }   
}

// map the dispatch/actions to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

// Pass these props to the highest component i.e Main with connect()
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

// export App to be imported inside index.js so it can be rendered inside ReactDOM
export default App