import React from 'react';
import ReactDOM from 'react-dom/client';
import MyName from './stateProps';

const root = ReactDOM.createRoot(
  document.getElementById('task1')
);


function Hello(){
  // const name = prompt('Введите свое имя:');
  const name = "Kate";
  return(
    <div>
        Hello, {name}! <br/>
        <MyName/>
    </div>
  )
}

root.render(
  <Hello />,
  document.getElementById('task1')
) 