import React,{Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Link, Route} from 'react-router-dom'
import Single from './Single'
import Comments from './Comments'

/* Main receives props through passing them down in App.js */

class Main extends Component {
    
    state = {
        loader: true
    }
    // LifeCycle method
    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loader: false})//done fetching data
        })
        this.props.startLoadingComments()
    }

        // Why "this" binding works in render() but not removePhoto()?
        // Since, removePhoto() is part of the event handler "OnClick = onRemovePhoto(post)"
        // we lost the "this" binding such that it is now in the context of a *function* ^ and not component.
        // Naturally, the context of a function is null by default.
        /* this.removePhoto = this.removePhoto.bind(this)
        console.log("constructor")
    }*/

    // setState() updates the state and retriggers the render()
    // It doesn't create a new instance by trigerring constructor()
    /* removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))

    }

    // LifeCycle method
    componentDidMount() {

    }

    // LifeCycle method
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    } */

    // this.props.dispatch.removePost()
    // now, after binding in mapDispatchToProps you can write
    // this.props.removePost()

    render() {
        console.log("render")
            return (
                <div>
                    <h1>
                        <Link to="/">Photowal</Link>
                    </h1>
                    <Route exact path = "/" render = {() => (
                        <div>
                            <PhotoWall {...this.props}/>
                        </div>
                    )}/>
    
                    <Route path = "/AddPhoto" render = {({history}) => (// you can also pass in (params) which contains {history}
                        <AddPhoto {...this.props}/>
                    )}/>

                    <Route path = "/single/:id" render = {(params) => (
                        <div>
                            <Single loading={this.state.loader} {...this.props} {...params}/>
                        </div>
                    )}/>
                    
                </div>
            )
        }
}

// export Main component to be imported inside App.js
export default Main
