import React from "react"
import Book from "./Book"
class Shelf extends React.Component{
      shelfTypes= "currentlyReading read wantToRead".split(" ")
  render(){

    return (
      <div className="shelf-container section">
      <div className="divider"/>
      <div className="row shelf-header"><div className="col xs12"><span>{this.props.shelftype}</span></div></div>
      <hr />
      <div className="shelf-body">

      {this.props.books.map((a)=> <div key={a.imageLinks.thumbnail} className="book-item hoverable" title={a.title}><Book key={a.id} id={a.id} thumb={a.imageLinks.thumbnail} title={a.title} authors={a.authors} shelf={a.shelf} shelfTypes = {this.shelfTypes} update = {this.changeEm}/></div>)}

      </div>
      </div>
    )
  }
  changeEm = (id,shelf)=>{
    this.props.updateShelf(id,shelf)
  }
}

export default Shelf;
