import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect, withRouter} from 'react-router-dom';
import ShowLocationInfoWithRouter from "./nav-info";


const route3 = ReactDOM.createRoot(
    document.getElementById('routing_p2')
  );

const Home = () => <div>
        <p>Home</p>
        <img src={require('../img/home.png')} width="200px"/>
        <div className="location"><ShowLocationInfoWithRouter/> </div>
    </div>;
const About = () => <div>
        <p>About</p>
        <img src={require("../img/about.png")} width="200px"/>
        <div className="location"><ShowLocationInfoWithRouter/> </div>
    </div>;
const BlogPosts = () => <div>
        <p>BlogPosts</p>
        <img src={require('../img/blog.png')} width="200px"/>
        <div className="location"><ShowLocationInfoWithRouter/> </div>
    </div>
const NotFound = () => <div>
        <p>Error: 404 <br/>Not found</p>
        <img src={require('../img/404.png')} width="200px"/>
    </div>

class ReactRouter1 extends React.Component{
    render(){
        return(
            <Router>
                <p>Part 2</p>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="is_active" activeStyle={{color: '#5a1818'}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="is_active" activeStyle={{color: '#5a1818'}}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-posts" activeClassName="is_active" activeStyle={{color: '#5a1818'}}>BlogPosts</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Redirect from="/about" to="/blog-posts"/> */}
                    <Route path="/about" component={About} />
                    <Route path="/blog-posts" component={BlogPosts} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        )
    }
}



export default ReactRouter1;

route3.render(
    <ReactRouter1/>,
    document.getElementById('routing_p2')
  ) 