import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import Posts from './Post'

import * as serviceWorker from './serviceWorker';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const routing = (
    <Router>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="menu-list">
                        <li>
                            <b>Sai Blogs</b>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts/">Posts</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/> 
            <Route exact path="/" component={App}/>
            <Route path="/posts/" component={Posts}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
