import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status===404){
    return(
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh! page not found </h3>
          <p>We can't seem to find the page you're looking for :{'('} </p>
          <a href='/dashboard'>Back Home</a>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
      <h3>Something went wrong!</h3>
      <h5><a href='/dashboard'>Back Home</a></h5>
      </div>
    </Wrapper>
  )
}

export default Error