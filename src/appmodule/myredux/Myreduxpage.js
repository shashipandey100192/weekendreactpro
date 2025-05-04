import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,oldage } from './Myactionlist';

function Myreduxpage() {
    const disp = useDispatch();

    const sage = useSelector((state) => state.counter.age)

  return (
    <div className='container cmt'>
        <div className='row'>
            <div className='col-12'>
                <h1>use of redux page</h1>
                <h1>{sage}</h1>
                <button onClick={() => disp(increment())} className='btn btn-success'> change age </button>
                <button onClick={() => disp(oldage())} className='btn btn-success'> new age</button>
            </div>
        </div>
    </div>
  )
}

export default Myreduxpage