import React from 'react'
import { a } from 'react-router-dom'

function Cus_regishrefr() {
    return (
        <div className='container mt-3'>

            <div className='row justify-content-center'>
                <div className='col-md-8 border bg-light p-3 shadow'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 p-3 text-center'>
                                <p className='h2'>New regishrefr page</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='enter fullname'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="tel" className="form-control" placeholder='enter phone no'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className='form-select'>
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div className="mb-3">

                                    <input type="submit" className="btn btn-success"  value="regishrefr now"/>
                                    <input type="reset" className="btn btn-danger ms-3" />
                                    {/* <a href="forgetpassword" className='ms-2'>forget</a>
                                    <a href="/cus_regishrefr" className='ms-2'>New User regishrefr</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cus_regishrefr