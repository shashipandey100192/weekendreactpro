import React, { Fragment } from 'react'
import Sidenavbar from '../shares/Sidenavbar'
import Headerpage from '../shares/Headerpage'
import { Outlet } from 'react-router-dom'



function Cus_landingpage() {
    return (
        <Fragment>
            <Headerpage></Headerpage>
            <Sidenavbar></Sidenavbar>
           <Outlet></Outlet>
        </Fragment>


    )
}

export default Cus_landingpage

// https://demos.wrappixel.com/premium-admin-templates/bootstrap/materialpro-bootstrap/package/html/horizontal/index3.html