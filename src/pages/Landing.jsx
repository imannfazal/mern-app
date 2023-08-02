import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span>App
          </h1>
          <p>
            I'm baby jean shorts lyft bicycle rights taxidermy franzen venmo. Intelligentsia normcore same franzen ascot shabby chic, godard neutral milk hotel vegan farm-to-table viral bitters gentrify pabst kogi. Chicharrones jawn vape, master cleanse hexagon enamel pin meditation taiyaki neutra fashion axe wayfarers gatekeep celiac. Hashtag praxis shoreditch yuccie locavore, air plant fashion axe XOXO fixie truffaut hell of slow-carb.
          </p>
          <Link to='/register' className='btn register-link'>Register</Link>
          <Link to='/login' className='btn'>Login / Demo user</Link>
        </div>
        <img src={main} className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing;