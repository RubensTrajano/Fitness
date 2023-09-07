import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';


//pega ultima versao do react
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
)