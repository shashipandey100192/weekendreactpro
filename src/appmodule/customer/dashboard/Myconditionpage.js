import React, { useState } from 'react'

function Myconditionpage() {
    const [a,b] =useState("first"); 
//   const a = "third";
const myfunc = (xyz)=>{
    b(xyz.target.value);
}
    if(a==="first")
    {
        return (
            <div className='container-fluid cmt'>
                <div className='row'>
                    <div className='col-12 bg-info p-3'>
                        <h1>this is default page</h1>
                        <select onChange={myfunc}>
                            <option>select order</option>
                            <option>first</option>
                            <option>second</option>
                            <option>third</option>
                        </select>
        
                    </div>
                </div>
            </div>
          )
    }
    else if(a==="second")
    {
        return (
            <div className='container-fluid cmt'>
                <div className='row'>
                    <div className='col-12 bg-warning p-3'>
                        <h1>this is second  page</h1>
                        <select onChange={myfunc}>
                            <option>select order</option>
                            <option>first</option>
                            <option>second</option>
                            <option>third</option>
                        </select>
                    </div>
                </div>
            </div>
          )
    }
    else
    {
        return (
            <div className='container-fluid cmt'>
                <div className='row'>
                    <div className='col-12 bg-danger p-3'>
                        <h1>Not match page </h1>
                        <select onChange={myfunc}>
                            <option>select order</option>
                            <option>first</option>
                            <option>second</option>
                            <option>third</option>
                        </select>
        
                    </div>
                </div>
            </div>
          )
    }

}

export default Myconditionpage