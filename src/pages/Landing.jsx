import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div><h5>Already have an account? <Link to="/login">Login</Link> or create a new account! <Link to="/register">Signup</Link></h5></div>
  )
}

export default Landing