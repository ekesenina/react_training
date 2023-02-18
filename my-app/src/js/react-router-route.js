import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const route2 = ReactDOM.createRoot(
    document.getElementById('react_router')
  );

const Home = () => <div>
    <p>Home</p>
    <img src={require('../img/home.png')} width="200px"/></div>;
const About = () => <div>
    <p>About</p>
    <img src={require("../img/about.png")} width="200px"/>
    </div>;
const BlogPosts = () => <div>
    <p>BlogPosts</p>
    <img src={require('../img/blog.png')} width="200px"/>
    </div>

class ReactRouter extends React.Component{
    render(){
        return(
            <Router>
                <p>Part 1</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog-posts">BlogPosts</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog-posts" component={BlogPosts} />
                </Switch>
            </Router>
        )
    }
}

export default ReactRouter;

route2.render(
    <ReactRouter/>,
    document.getElementById('react_router')
  ) 