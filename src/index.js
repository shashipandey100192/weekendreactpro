import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/global.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Welcomepage from './appmodule/Welcomepage';
import Cus_login from './appmodule/customer/auth/Cus_login';
import Cus_registor from './appmodule/customer/auth/Cus_registor';
import Cus_landingpage from './appmodule/customer/dashboard/Cus_landingpage';
import Cus_mainpage from './appmodule/customer/dashboard/Cus_mainpage';
import Myhookspage from './appmodule/customer/dashboard/Myhookspage';
import Myapidatapage from './appmodule/customer/dashboard/Myapidatapage';
import Productdetailspage from './appmodule/customer/dashboard/Productdetailspage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='cus_login' element={<Cus_login/>}></Route>
        <Route path='cus_registor' element={<Cus_registor/>}></Route>
        <Route path='cus_dashbaord' element={<Cus_landingpage/>}>
            <Route path='' element={<Cus_mainpage/>}></Route>
            <Route path='hookspage' element={<Myhookspage/>}></Route>
            <Route path='apidata' element={<Myapidatapage/>}></Route>
            <Route path='apidata/details/:id' element={<Productdetailspage/>}></Route>
        
        </Route>
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

