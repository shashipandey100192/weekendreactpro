import React from 'react';
import ReactDOM from 'react-dom/client';
import { lazy,Suspense } from 'react';
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
import Mychart from './appmodule/customer/dashboard/Mychart';
import Mydyngraph from './appmodule/customer/dashboard/Mydyngraph';
import Parentpage from './appmodule/customer/dashboard/Parentpage';
import Errorpage from './appmodule/customer/shares/Errorpage';
import Tablepagination from './appmodule/customer/dashboard/Tablepagination';
// import Lazypage from './appmodule/customer/dashboard/Lazypage';
const Lazypage = lazy(()=>import("./appmodule/customer/dashboard/Lazypage"));




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
            <Route path='graphpage' element={<Mychart/>}></Route>
            <Route path='dyngraphpage' element={<Mydyngraph/>}></Route>
            <Route path='propspage' element={<Parentpage/>}></Route>
            <Route path='lazypage' element={<Suspense fallback={<h1 className='loading'>loading page</h1>}>
              {<Lazypage/>}
            </Suspense>}></Route>
            <Route path='pagination' element={<Tablepagination/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Route>
        <Route path='*' element={<Errorpage/>}/>
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

