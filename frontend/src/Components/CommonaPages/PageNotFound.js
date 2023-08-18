import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>PageNotFound
      <NavLink to={-1}><button>Go Back</button></NavLink>
    </div>
    
  )
}

export default PageNotFound