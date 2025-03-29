import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./global.css";
import Myabout,{Myabout1} from './About';
import Mycontact from './Mycontact';
import Mybootstrap from './Mybootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myabout></Myabout>
    <Myabout1></Myabout1>
    <Mycontact></Mycontact>
    <Mybootstrap></Mybootstrap>


  </React.StrictMode>
);

