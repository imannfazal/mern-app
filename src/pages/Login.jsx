import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import FormRow from '../components/FormRow'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow name='email' type='email' defaultValue='iman@gmail.com' />
        <FormRow name='password' type='password' defaultValue='secret123' />
        <button type='submit' className='btn btn-block'>Login</button>
        <button type='button' className='btn btn-block'>Explore the app</button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>Register</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login