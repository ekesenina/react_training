import React from "react";
import ReactDOM from 'react-dom/client';
import Hello from './stateProps';

const root = ReactDOM.createRoot(
    document.getElementById('buton'),
  );

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {clicked: false};
    }

    render(){
        const {clicked} = this.state;

        if( clicked ){
            return(
                <div>
                    <p>
                        Это действительно Я!!!
                    </p> <br/>
                    <button className="button">Это не я! <br/><a href="./index.html">*сменить имя*</a></button>
                </div>
            ) 
        }

        return(
            <button onClick={()=> this.setState({clicked: true})} className='button'>Это вы?</button>
        )
    }
}

function MyName() {
    return (
        <>
            <Button/>
        </>
    )
}

root.render(
    <MyName />,
    document.getElementById('buton'),
  )

export default MyName;

