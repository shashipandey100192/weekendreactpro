import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Cus_login() {
    const [user,setuser]=useState({
        email:"",
        pass:""
    })

const formsub = (e)=>{
    console.log(user);

}
const changevalule = (e)=>{
        const { name, value } = e.target;
        setuser((attr) => {
      return {
        ...attr,
        [name]: value
      }
    })
}

    const mymsg = ()=>{
        toast.success("welcome to login page",{position: "top-left",theme: "dark",autoClose: 1000});
    }

    return (
        <div className='container mt-3'>
            
            <div className='row justify-content-center'>
                <div className='col-md-5 border bg-light p-3 shadow'>
                    <div className='container-fluid'>
                    <div className='row'>
                <div className='col-12 p-3 text-center'>
                    <p className='h2'>Customer Login Page</p>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" name='email' value={user.email} onInput={changevalule}/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" name='pass' value={user.pass} onInput={changevalule}/>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="button" class="btn btn-success" value="Login" onClick={formsub}/> 
                                    <input type="reset" class="btn btn-danger ms-3"/>
                                    <Link to="forgetpassword" className='ms-2'>forget</Link>
                                    <Link to="/cus_registor" className='ms-2'>New User registor</Link>
                                    <input type='button' value="msg" onClick={mymsg}/>
                                 
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