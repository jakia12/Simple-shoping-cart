
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import Context from './context/Context';




ReactDOM.render(
    <React.StrictMode>    
        <Context> 
             <App/>
          </Context>  
    </React.StrictMode>,document.getElementById("root")
     
);