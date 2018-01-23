import React, { Component } from 'react';
import Shelf from "./Section"
import * as api from "./BooksAPI"
class App extends Component {
  state={
    reading:[],
    read:[],
    wish:[],
    load: false,
  }
  componentDidMount(){
    api.getAll().then((books)=>{
// Sorting books into respective categories
console.log(books)
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
render(){
  return (
    <div>
    <div className="row header valign-wrapper">
    <div className="col s12">
    <span>MyReads</span>
    </div>
    </div>
    <Shelf shelftype="Currently Reading" books={this.state.reading} />
    <Shelf shelftype="Want To Read" books={this.state.read}/>
    <Shelf shelftype="Wishlist" books={this.state.wish}/>
    <div className = "divider foo"  />
    <footer></footer>
    </div>
  )
}
}

export default App;
