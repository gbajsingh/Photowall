import React,{Component} from 'react'

/* Comments component receives props through passing them down in Single.js */

class Comments extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    handleSubmit(event) {
        // to prevent he default refreshing page
        event.preventDefault()
        const comment = event.target.elements.comment.value
        this.props.startAddingComment(comment, this.props.id)
        event.target.elements.comment.value = ''
    }

    render() {
        return <div className = "comment">   
        {
            this.props.comments.map((comment, index) => {
                return (
                    <p key={index}>{comment}</p>
                )
            })
        }
                {/* Note: <input/> can be one of the three types: text, submit, radiobutton */}
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder = "comment" name="comment"/>
                    <input type = "submit" hidden/>
                </form>
        </div>
    }
}

// export Comments component to be imported inside Single.js
export default Comments