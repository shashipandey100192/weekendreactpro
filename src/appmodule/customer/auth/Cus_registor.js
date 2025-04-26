import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


function Cus_regishrefr() {
    const [stu, setstu]=useState([]);
    const {register, handleSubmit,formState: { errors }}=useForm();

    const myform = (formdata)=>{
        console.log(formdata)
    }

const getdata = ()=>{
    const frinds = JSON.parse(localStorage.getItem('students'));
    setstu(frinds);
}
useEffect(()=>{
    getdata();
},[])


    return (
        <form onSubmit={handleSubmit(myform)}>
        <div className='container mt-3'>

            <div className='row justify-content-center'>
                <div className='col-md-8 border bg-light p-3 shadow'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 p-3 text-center'>
                                <p className='h2'>New registor page</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>Email is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='enter fullname' {...register("fullname",{required:true,minLength:5,maxLength:10})}/>
                                    {/* {errors.fullname && <p className='text-danger'>Fullname is required</p>} */}
                                    {errors.fullname?.type==='required' && <p className='text-danger'>Fullname is required</p>}
                                    {errors.fullname?.type==='minLength' && <p className='text-warning'>Minimum 5 charector </p>}
                                    {errors.fullname?.type==='maxLength' && <p className='text-success'>too strong </p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" {...register("dob")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="tel" className="form-control" placeholder='enter phone no' {...register("phone")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")}>
                                    <option selected hidden>gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" {...register("pass")}/>
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
                    
                    <select>
                    <option selected hidden>name</option>
                        {stu.map((d)=>{
                            return <option key={d.name}>{d.name}</option>
                        })}
                    </select>
                    <select >
                    <option selected hidden>phone</option>
                        {stu.map((d)=>{
                            return <option key={d.phone}>{d.phone}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Cus_regishrefr