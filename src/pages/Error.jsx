import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>Error</div>
      <Link to='/'>Back Home</Link>
    </>
  )
}

export default Error