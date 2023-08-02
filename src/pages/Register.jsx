import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor='name' className='form-label'>name</label>
          <input type='text' className='form-input' id='name' name='name' required defaultValue='iman' />
        </div>
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