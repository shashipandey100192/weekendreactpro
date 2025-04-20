import React from 'react'

function Subchildpages(props) {
  return (
    <div className='border p-3 bg-success text-white'>subChildpage
        <ul>
        {props.studentlistitme.map((d)=>{
            return <li>{d}</li>
        })}
            
        </ul>
    </div>
  )
}

export default Subchildpages