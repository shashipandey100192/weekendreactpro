import React from 'react'
import Subchildpages from './Subchildpages'

function Childpage(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h5 className="card-title">Card title {props.sname}</h5>
                            <h2>{props.slist}</h2>
                            <select>
                                {props.slist.map((d) => {
                                    return <option>{d}</option>
                                })}
                            </select>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                            <Subchildpages studentlistitme={props.slist}></Subchildpages>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Childpage