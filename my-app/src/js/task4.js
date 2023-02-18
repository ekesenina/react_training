import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

const root = ReactDOM.createRoot(
    document.getElementById('likeCounter')
);


// class UserCard extends React.Component {
//     render() {
//       const name = this.props.name
//       const email =this.props.email
//       const avatar = this.props.avatar
//       return (
//         <div className='card'>
//           <img src={avatar} width="30px" height="30px"/>
//           <div className='card-data'>
//             <div className='name'>{name}</div>
//             <div className='email'>{email}</div>
//           </div>
//         </div>
//       )
//     }
//   }
  
//   UserCard.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }
  
//   root.render(
//       <UserCard
//      name='Василий Пупкин'
//       avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
//       email='vasiliy.pupkin@yandex.ru'
//     />,
//     document.getElementById("likeCounter")
//   )
  