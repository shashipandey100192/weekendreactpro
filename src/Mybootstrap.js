import React from 'react'
import { FcAlarmClock,FcNoIdea  } from "react-icons/fc";
import { HiHomeModern } from "react-icons/hi2";

function Mybootstrap() {
  return (
    <div className='container bg-danger p-5 text-center'>
      <div className='row'>
        <div className='col-12'>
          <h1>use of bootstrap  <FcAlarmClock></FcAlarmClock> <FcNoIdea ></FcNoIdea> <HiHomeModern></HiHomeModern></h1>
        </div>
        <div className='col-md-3 mt-3'>
          <div className="card">
            <img src="myimgs/img1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div className="card">
            <img src="myimgs/img1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div className="card">
            <img src="myimgs/img1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div className="card">
            <img src="myimgs/img1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div className="card">
            <img src="myimgs/img1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div className="card">
            <img src="myimgs/img1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-danger">Primary</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mybootstrap