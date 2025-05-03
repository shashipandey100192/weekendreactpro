import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div className="container-fluid">
        <div className='row'>
            <div className='col-12'>
                <h1>404</h1>
                <p>Page Not Found</p>
                <Link to="/" className='btn btn-danger'>Back to Home page</Link>
            </div>
        </div>
    </div>
  )
}

export default Errorpage