import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft } from 'react-icons/fa'
import Logo from './Logo';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button type='button' className='toggle-btn'>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>Dashboard</h4>
        </div>
        <div className="button-container">
          toggle/logout
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar