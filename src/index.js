import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PassObject from './PassObject';
import Jocking from './Jocking';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<PassObject></PassObject>
    //<App></App>
    <Jocking />                //conditional rendering
);

