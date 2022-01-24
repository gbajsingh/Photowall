import React,{Component} from 'react'

/* AddPhoto receives props through passing them down in Main.js */

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        // to prevent the default behavour of refreshing the page
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink) {
            this.props.startAddingPost(post)
            this.props.history.push('/')
        }
        
    }
    render() {
        return (
        <div>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder="Link" name="link"/>
                    <input type = "text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>           
        </div>

        )
    }
}

// export AddPhoto to be imported inside Main.js
export default AddPhoto