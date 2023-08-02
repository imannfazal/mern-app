import React from 'react'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <h1>Home Layout</h1><br /><br />
      <h5>Already have an account? <Link to="/login">Login</Link> or create a new account! <Link to="/register">Signup</Link></h5>
      
    </>
  )
}

export default HomeLayout