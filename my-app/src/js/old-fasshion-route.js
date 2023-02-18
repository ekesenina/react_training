import React from "react";
import ReactDOM from 'react-dom/client';

const route = ReactDOM.createRoot(
    document.getElementById('routing')
  );

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;


class OldFashionRoute extends React.Component {
    render(){
        return(
            <div>
            <p>Обычный старый роутинг</p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </div>
        );
    }
}

export default OldFashionRoute;

route.render(
    <OldFashionRoute />,
    document.getElementById('routing'),
  ) 

