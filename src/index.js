import React from 'react';
import {
    Route,
    BrowserRouter
} from "react-router-dom"
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import "materialize-css/dist/css/materialize.css"
import './index.css';
import Moar from "./Moar"
import 'materialize-css/dist/fonts/roboto/Roboto-Medium.woff'
import 'materialize-css/dist/fonts/roboto/Roboto-Medium.woff2'
import 'materialize-css/dist/js/materialize.js'


import App from './App';

// Using MuiThemeProvider here for the dropdown button component. Cheers to Material UI!
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <BrowserRouter>
  <div>
  <Route exact path="/add" component={Moar} />
  <Route exact path="/" component={App} />
  </div>
  </BrowserRouter>
  </MuiThemeProvider>,

    document.getElementById('root'));
