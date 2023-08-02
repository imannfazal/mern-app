import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Wrapper>
      <h5>Already have an account? <Link to="/login">Login</Link> or create a new account! <Link to="/register">Signup</Link></h5>
      <br/><div className='content'>Styled Button</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background:red;
  color:white;
  .content{
    background:blue;
    color: violet;
  }
  `;

export default Landing