import React from 'react';
import ReactDOM from 'react-dom/client';
import Myabout,{Myabout1} from './About';
import Mycontact from './Mycontact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myabout></Myabout>
    <Myabout1></Myabout1>
    <Mycontact></Mycontact>


  </React.StrictMode>
);

