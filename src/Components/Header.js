import React from 'react';
import '../App.css';
import imdbLogo from '../imdb.png'

const Header = () => {
  return (
    <div className='header'>
        {/* <div className='Logo'>Logo</div> */}
        <img className='Logo'  src={imdbLogo} />
        <div className='Home'>Home</div>
        <div className='Albums'>Album</div>
    </div>
  )
}

export default Header