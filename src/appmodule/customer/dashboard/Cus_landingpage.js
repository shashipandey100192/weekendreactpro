import React, { Fragment } from 'react'
import Sidenavbar from '../shares/Sidenavbar'
import Headerpage from '../shares/Headerpage'
import { RiBarChartGroupedLine } from "react-icons/ri";

function Cus_landingpage() {
    return (
        <Fragment>
            <Headerpage></Headerpage>
            <Sidenavbar></Sidenavbar>
            <div className='container-fluid cmt'>
                <div className='row p-2'>
                    <div className='col-md-6 ps-3'>
                        <p className='h3'>Dashboard</p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='col-md-6 pe-3 '>
                        <h5 className='float-end'>hreftal: 57487 <RiBarChartGroupedLine /></h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card shadow bg-primary text-white">
                            <div className="card-body">
                                <h4 className="card-title float-start">hreftal:500</h4>
                                <h3 className="card-title float-end"> <RiBarChartGroupedLine/></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card shadow bg-success text-white">
                            <div className="card-body">
                                <h4 className="card-title float-start">hreftal:500</h4>
                                <h3 className="card-title float-end"> <RiBarChartGroupedLine/></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card shadow bg-warning text-white">
                            <div className="card-body">
                                <h4 className="card-title float-start">hreftal:500</h4>
                                <h3 className="card-title float-end"> <RiBarChartGroupedLine/></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card shadow bg-danger text-white">
                            <div className="card-body">
                                <h4 className="card-title float-start">hreftal:500</h4>
                                <h3 className="card-title float-end"> <RiBarChartGroupedLine/></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-4 mt-3'>
                        <div className='card shadow p-4'>
                            <h4>graph</h4>
                            <h4>graph</h4>
                            <h4>graph</h4>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <div className='card shadow p-4'>
                            <h4>graph</h4>
                            <h4>graph</h4>
                            <h4>graph</h4>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <div className='card shadow p-4'>
                            <h4>graph</h4>
                            <h4>graph</h4>
                            <h4>graph</h4>
                        </div>
                    </div>
                    <div className='col-md-8 mt-3'>
                        <div className='card shadow p-4'>
                            <h4>graph</h4>
                            <h4>graph</h4>
                            <h4>graph</h4>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <div className='card shadow p-4'>
                            <h4>graph</h4>
                            <h4>graph</h4>
                            <h4>graph</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>


    )
}

export default Cus_landingpage

// https://demos.wrappixel.com/premium-admin-templates/bootstrap/materialpro-bootstrap/package/html/horizontal/index3.html