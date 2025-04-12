import React, { useState } from 'react'
import Cus_login from '../auth/Cus_login';



function Myhookspage() {

    const [sv, sf] =useState("kumar");

    let myfunc = ()=>{
        sf("ravi singh");
    }

    const [a,b]=useState("defauldata");

    const changevalue = (e)=>{
        console.log(e.target.value);
        b(e.target.value)

    }

    return (
    <div className='container cmt'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card p-3'>
                    <h1>mycard {sv}</h1>
                    <input type='text' value={sv}/>
                    <input type='button' value="change" onClick={myfunc}/>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card p-3'>
                    <h1>mycard</h1>
                    <input type='text' value={a} onInput={changevalue}/>
                    <h2>{a}</h2>
                    <h2>{a==="one"? "this is first option":"no"}</h2>
                    <h2>{a>=50 ? 800 : 0o0}</h2>
                    <h2>{a==="true" ? <Cus_login/> : ""}</h2>
                </div>
            </div>
        </div>
    </div>
  )


}

export default Myhookspage