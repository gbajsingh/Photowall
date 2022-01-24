import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

/* Single receives props through passing them down in Main.js */

class Single extends Component {
    render() {
        const {match, posts} = this.props// declaring {match, post} as direct properties of this.props to avoid writing this.props everytime
        const id = Number(match.params.id)//pattern matching
        const post = posts.find((post) => post.id === id)// Array.find() method that returns element itself when found
        const comments = this.props.comments[id] || []
        const index = posts.findIndex((post) => post.id === id)// Array.findIndex() method that returns element's index when found
        if (this.props.loading === true) {// since LifeCycle method componentdidMount() hasn't fetch data yet
            return <div className="loader">...loading</div>
        } else if (post) {
            return <div className='single-photo'>
                    <Photo post = {post} {...this.props} index={index}/>
                    <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
                </div>
        } else {
            return <h1>...no post found</h1>
        } 
        
    }
}

// export Single to be imported inside Main.js
export default Single