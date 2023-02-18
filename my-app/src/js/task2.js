// Сформируйте список покупок в компоненте List. 
// List должен иметь пропс orderList, соответствующий 
// структуре, заданной в List.propTypes.

// Элементы списка, у которых поле urgent равно true, 
// должны быть красного цвета.
// Элементы списка, у которых поле done равно true, 
// должны быть перечёркнуты.

import React from "react";
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

const DOM = ReactDOM.createRoot(
    document.getElementById('task2')
  );

const list = [
    {
        id: 1,
        title: 'Креветки',
        urgent: true,
        done: true
    },
    {
        id: 2,
        title: 'Вася гусь',
        urgent: true,
        done: true
    },
    {
        id: 3,
        title: 'Вино',
        urgent: true,
        done: false
    },
    {
        id: 4,
        title: 'Камамбер',
        urgent: false,
        done: false
    },
    {
        id: 5,
        title: 'Красная рыбка',
        urgent: false,
        done: false
    }
]

class List extends React.Component{
    render(){
        return (
        <ul>
            {this.props.orderList.map((item) => (
                <li key = {item.id} style={{color: item.urgent && '#a4161a', textDecoration: item.done && 'line-through'}}>
                    {item.title}
                </li>
            ))}
        </ul>)
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <h2>Shopping list:</h2>
                <List orderList={list}/>
            </div>)
    }
    
}

List.propTypes = {
    orderList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        urgent: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired
      })
    )
  }
  
DOM.render(
  <App />, 
  document.getElementById("task2")
)