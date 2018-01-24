import React, { Component } from 'react';
import Shelf from "./Section"
import {Route,BrowserRouter,Link} from "react-router-dom"
import * as api from "./BooksAPI"

class App extends Component {
  state={
    all:[],
    reading:[],
    read:[],
    wish:[],

  }
  potato = ()=>{
    api.getAll().then((books)=>{
// Sorting books into respective categories

      const reading=[]
      const read=[]
      const wish=[]
      const load= true
      books.forEach((book)=>{

        book.shelf === `currentlyReading` && (
          reading.push(book)
        )

        book.shelf === `read` && (
          read.push(book)
        )

        book.shelf === `wantToRead` && (
          wish.push(book)
        )
      })

      this.setState({reading,read,wish})
    })
  }
  componentDidMount(){
    this.potato()
  }

  handleUpdate =(id,shelf)=>{
    api.get(id).then((book)=>{
      return api.update(book,shelf);
    }).then(this.potato)
  }
render(){
  return (
    <div>
    <div className="row header valign-wrapper">
    <div className="col s12">
    <span>MyReads</span>
    </div>
    </div>
    <Shelf key={1} shelftype="Currently Reading" books={this.state.reading} updateShelf={this.handleUpdate} />
    <Shelf key={2} shelftype="Read" books={this.state.read} updateShelf={this.handleUpdate}/>
    <Shelf key={3} shelftype="Wishlist" books={this.state.wish} updateShelf={this.handleUpdate}/>
    <div className = "divider foo"  />
    <Link to="/add" className="floatingButt"></Link>
    <footer></footer>
    </div>
  )
}
}

export default App;
