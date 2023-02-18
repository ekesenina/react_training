import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


const DOM3 = ReactDOM.createRoot(
    document.getElementById('likeCounter')
);

class LikeButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          likeCounter: this.props.initialLikeNumber
      }
    } 
    
    incrementLikeCounter() {
        const newValue = this.state.likeCounter + 1
        this.setState({likeCounter: newValue})
    }
    
    render() {
      const name = this.props.name
      const email =this.props.email
      const avatar = this.props.avatar
      return (
        <>
          <div className='card'>
            <img src={avatar} width="30px" height="30px"/>
            <div className='card-data'>
              <div className='name'>{name}</div>
              <a href="mailto:{email}" className='email'>{email}</a>
            </div>
          </div>
            <img src="../img/Shanya.jpg" alt="img" className='photo'/>
            <button onClick={() => this.incrementLikeCounter()} className={"like"}>
            <img src="https://img.icons8.com/color/48/000000/hearts.png"/> {this.state.likeCounter}
            </button>
        </>
      )
    }
  }
  
  LikeButton.propTypes = {
      initialLikeNumber: PropTypes.number,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
  }


  DOM3.render(
    <LikeButton 
      name='Шаньчоус'
      avatar="https://sun4-16.userapi.com/impg/Bn620EVG6Fd4qpRilXRt7xjJ3hFwXtUijHuPiQ/uUcLjgRphB8.jpg?size=810x1080&quality=95&sign=4578c1823f2f1e96dd3cea763dd0450d&type=album"
      email='ekesenina2306@gmail.com'
      initialLikeNumber={0} />,
    document.getElementById('likeCounter')
  )