import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

/* Photo receives props through passing them down in PhotoWall.js and Single.js */

function Photo(props) {
    const post = props.post
    return <figure className="figure">
                <Link to={`/single/${post.id}`}><img className="photo" src = {post.imageLink} alt = {post.description}/></Link>   
                <figcaption> <p>{post.description}</p> </figcaption>
                <div className="button-container">
                <button className="remove-button" onClick={() => {
                    props.startRemovingPost(props.index, post.id)
                    props.history.push('/')
                }}> Remove </button>
                <Link to={`/single/${post.id}`} className="button">
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0} {/* Syntax "?" if exist return this : else return this */}
                    </div>
                </Link>
                </div>
           </figure>
}

// defined a propType property to make sure object is passed as Photo's prop inside PhotoWall.js
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    
}

// export Photo to be imported inside PhotoWall.js and Single.js
export default Photo

/*
class Photo extends Component {
    render() {
       const post = this.props.post
       return <figure className="figure">
           <img className="photo" src = {post.imageLink}/>
           <figcaption> <p>{post.description}</p> </figcaption>
           <div className="button-container">
           <button className="remove-button"> Remove </button>
           </div>
           
       </figure> 
    }
}*/

