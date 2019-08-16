import React from 'react'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result => {
            this.setState({posts: result})
        })
    }

    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <h5><b>Posts</b></h5>
                </div>
                {this.state.posts.map(item => (
                    <div className="col-3" key={item.id}>
                        <div className="post">
                            <img src="http://lorempixel.com/400/250/sports/" className="img-fluid" />
                            <h5><b>{item.title}</b></h5>
                            <Link to={`/posts/${item.id}`}>
                                <button>View Post {item.id}</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Posts