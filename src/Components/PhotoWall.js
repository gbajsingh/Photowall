import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

/* PhotoWall receives props through passing them down in Main.js */

function PhotoWall(props) {
    return <div>
                <Link className="addIcon" to="/AddPhoto"> </Link>
                <div className="photoGrid"> 
                    {props.posts
                    .sort(function(x,y) {// this inside compare function returns either a negative, positive or zero 
                        return y.id - x.id// then sort() function depending on the returned value sorts recursively and set values in the array
                    })
                    .map((post,index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>
            </div>
}

// defined a propType property to make sure array is passed as PhotoWall's prop inside Main.js
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

// export AddPhoto to be imported inside Main.js
export default PhotoWall

/*class PhotoWall extends Component {
    render() {
        return <div className="photoGrid"> 
                {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
            </div>
    }

}*/

