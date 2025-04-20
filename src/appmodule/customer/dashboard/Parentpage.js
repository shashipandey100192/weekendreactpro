import React from 'react'
import Childpage from './Childpage'

const studentname = "ramu kaka";
const studentlist = ["vishal","indu","harshit"];
const firstslit = [
    {
        name:"ravi",
        phone:'8345748'
    },
    {
        name:"sohan",
        phone:'8158784'
    },
    {
        name:"mohan",
        phone:'9878541'
    }
];

localStorage.setItem("students",JSON.stringify(firstslit));

function Parentpage() {
  return (
    <div className='container-fluid cmt'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card p-3'>
                    <h1>main branch</h1>
                    {studentname}
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-6'>
                <div className='card p-3'>
                    <h1>sub branch</h1>
                    <Childpage sname={studentname}  slist={studentlist}></Childpage>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card p-3'>
                    <h1>sub branch</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Parentpage