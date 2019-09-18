import React from 'react';
import {
    BrowserRouter,
    Route
}from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PoiDataForm from './components/PoiDataForm';
import StockForm from './components/StockForm';
import AppContainer from './components/AppContainer';
import Confimation from './components/Confirmation';

export default function Routes(){
    return(
    <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/app' component={AppContainer}></Route>
        <Route path='/app/poiform' component={PoiDataForm}></Route>
        <Route path='/app/stockform' component={StockForm}></Route>
        <Route path='/app/confirmation' component={Confimation}></Route>
    </BrowserRouter>);
}