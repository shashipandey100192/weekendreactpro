import React from 'react'
import { Link } from 'react-router-dom'
import cuslogin from '../pictures/cus1.png';
import adminlogin from "../pictures/admin.png";

function Welcomepage() {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-12 text-center'>
                <h2>Welcome to Login page</h2>
            </div>
            <div className='col-md-2 text-center '>
                <div className='border card rounded-circle p-3 shadow'>
                <Link to="cus_login" className='loginicon '> 
                    <img src={cuslogin} alt='cus_login' className='img-fluid rounded-circle'/>
                    <h5>Customer Login</h5>
                </Link>
                </div>
            </div>

            <div className='col-md-2 text-center'>
            <div className='border card rounded-circle p-4 shadow'>
                <Link to="admin_login" className='loginicon'> 
                    <img src={adminlogin} alt='cus_login' className='img-fluid rounded-circle'/>
                    <h5>Admin Login</h5>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcomepage