
import React from 'react';
import {Route,BrowserRouter,Link} from "react-router-dom"
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import BookDetails from "./BookDetails"
import "materialize-css/dist/css/materialize.css"
import './index.css';
import Moar from "./Moar"
import 'materialize-css/dist/fonts/roboto/Roboto-Medium.woff'
import 'materialize-css/dist/fonts/roboto/Roboto-Medium.woff2'


import App from './App';


ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <BrowserRouter>
  <div>
  <Route exact path="/add" component={Moar} />
  <Route exact path="/" component={App} />
  <Route exact path="/book/:id" render={()=>{
  }}/>
  </div>
  </BrowserRouter>
  </MuiThemeProvider>,

  document.getElementById('root'));
