import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Landing = () => {
  const StyledBtn = styled.button`
  font-size: 1.5rem;
  background:red;
  color:white;
  `
  return (
    <div>
      <h5>Already have an account? <Link to="/login">Login</Link> or create a new account! <Link to="/register">Signup</Link></h5>
      <br/><StyledBtn>Styled Button</StyledBtn>
    </div>
  )
}

export default Landing