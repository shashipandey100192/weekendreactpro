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
            <div className='col-md-2 border shadow text-center'>
                <Link to="cus_login" className='loginicon'> 
                    <img src={cuslogin} alt='cus_login'/>
                    <h3>Customer Login</h3>
                </Link>
            </div>
            <div className='col-md-1'></div>

            <div className='col-md-2 border shadow text-center'>
                <Link to="admin_login" className='loginicon'> 
                    <img src={adminlogin} alt='cus_login'/>
                    <h3>Admin Login</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Welcomepage