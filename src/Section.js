import React from "react"
import Book from "./Book"
class Shelf extends React.Component{
  render(){
    return (
      <div className="shelf-container section">
      <div className="divider"/>
      <div className="row shelf-header"><div className="col xs12"><span>{this.props.shelftype}</span></div></div>
      <hr />
      <div className="shelf-body">
      {this.props.books.map((a)=> <div className="book-item hoverable" title={a.title}><Book key={a.title} thumb={a.imageLinks.thumbnail} title={a.title} authors={a.authors} /></div>)}

      </div>
      </div>
    )
  }
}

export default Shelf;
