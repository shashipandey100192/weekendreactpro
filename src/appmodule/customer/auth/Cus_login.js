import React from 'react'
import { Link } from 'react-router-dom'

function Cus_login() {
    return (
        <div className='container mt-3'>
            
            <div className='row justify-content-center'>
                <div className='col-md-5 border bg-light p-3 shadow'>
                    <div className='container-fluid'>
                    <div className='row'>
                <div className='col-12 p-3 text-center'>
                    <p className='h2'>Customer Login Page</p>
                </div>
            </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="submit" class="btn btn-success"/>
                                    <input type="reset" class="btn btn-danger ms-3"/>
                                    <Link to="forgetpassword" className='ms-2'>forget</Link>
                                    <Link to="/cus_registor" className='ms-2'>New User registor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cus_login