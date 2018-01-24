import React, { Component } from 'react';
import Shelf from "./Section"
import {Route,BrowserRouter,Link} from "react-router-dom"
import * as api from "./BooksAPI"

class Moar extends React.Component{
  state={
    input:"",
    results:[]
  }

  render(){
    return (
      <div>

        <div className="row">
          <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="row">
              <div className="input-field col s12">
                <input id="icon_prefix" type="text" className="validate" placeholder="Search Books Here!" onChange={this.handleSearch} value={this.state.input}/>

              </div>

            </div>
          </form>
        </div>

        { this.state.results && (<Shelf key={4} shelftype="Moar Books" books={this.state.results} updateShelf={this.handleUpdate} />)}
      </div>
    )
  }

  handleSearch=(a)=>{
    this.setState({input:a.target.value})
    api.search(this.state.input).then((res)=>{
      if(res){
        if(res.length >0)
        {
          this.setState({results:res})
        }
      }
    })
  }

}

export default Moar;
