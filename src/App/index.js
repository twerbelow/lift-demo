import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouteConfigJson from '@/PublicRouteConfig.json';
import SecureRouteConfigJson from '@/PrivateRouteConfig.json';
import { Lift } from '@d-lift/core';
import NextGen360 from '@d-lift/theme-nextgen360';
import '@d-lift/theme-nextgen360/dist/styles/NextGen360.css';

const initializeLift = () => {
    //Lift Initialization
    Lift.setRouterFile(RouteConfigJson, SecureRouteConfigJson);
    Lift.Themes = NextGen360;
    Lift.AppConfig = global.appconfig;
    //App rendering
    ReactDOM.render(<App />, document.getElementById('root'));
};

initializeLift();
