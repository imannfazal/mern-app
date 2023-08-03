import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
import FormRow from '../components/FormRow'
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow name='name' defaultValue='iman' type='text' />
        <FormRow name='lastName' labelText='last name' defaultValue='fazal' type='text' />
        <FormRow name='location' defaultValue='earth' type='text' />
        <FormRow name='email' defaultValue='iman@gmail.com' type='email' />
        <FormRow name='password' defaultValue='secret123' type='password' />
        <button type='submit' className='btn btn-block'>submit</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register