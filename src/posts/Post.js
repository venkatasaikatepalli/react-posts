import React from 'react'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    render() {
        return(
            <div className="row">
                <div className="col-8">
                <br></br>
                <h3><b>Posts</b></h3> 
                </div>
            </div>
        )
    }
}

export default Posts