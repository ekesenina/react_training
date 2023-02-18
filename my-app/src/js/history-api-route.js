import React from "react";
import ReactDOM from 'react-dom/client';

const route1 = ReactDOM.createRoot(
    document.getElementById('historyAPI')
  );

const Home = () => <div>
    <p>Home</p>
    <img src={require('../img/home.png')} width="200px"/></div>;
const About = () => <div>
    <p>About</p>
    <img src={require("../img/about.png")} width="200px"/>
    </div>;
const NotFound = () => <div>
    <p>Error: 404 <br/>Not found</p>
    <img src={require('../img/404.png')} width="200px"/>
    </div>


class HistoryAPIRoute extends React.Component {
    state = {location: window.location}
    handleClick = event => {
        event.preventDefault();
        window.history.pushState(null, null, event.target.href);
        this.setState({location: window.location})
    }
    handlePopState = () => {
        this.setState({location: window.location})
    }
    componentDidMount(){
        window.addEventListener('popstate', this.handlePopState)
    }
    render(){
        let RouteItem
        const {location} = this.state 
        switch (location.pathname) {
            case '/':
                RouteItem = Home;
                break;
            case '/about':
                RouteItem = About;
                break;
            default: 
                RouteItem = NotFound;
                break;
        }

        return(
            <div>
                <p>History API</p>
                <ul>
                    <li><a href="/" onClick={this.handleClick}>Home</a></li>
                    <li><a href="/about"onClick={this.handleClick}>About</a></li>
                </ul>
                <RouteItem/>
            </div>
        );
    }
}

export default HistoryAPIRoute;
route1.render(
    <HistoryAPIRoute />,
    document.getElementById('historyAPI')
  ) 