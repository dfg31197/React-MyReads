import React from "react"
import Book from "./Book"

/*
  This component represents a book shelf where futher books can be added
  Can also be used to categorize books into different categories should you wish
*/
class Shelf extends React.Component{
      // Statuses available for a book
      shelfTypes= "Currently Reading,Read,WishList,None".split(",")
  render(){

    return (
      <div className="shelf-container section">
      <div className="divider"/>
      <div className="row shelf-header"><div className="col xs12"><span>{this.props.shelftype}</span></div></div>
      <hr />
      <div className="shelf-body">
      {this.props.books.map((a)=> <div key={`shelfBookID${a.id}`} className="book-item hoverable" title={a.title}><Book key={a.id} id={a.id} thumb={a.imageLinks?a.imageLinks.thumbnail:"potato" } title={a.title} authors={a.authors} shelf={a.shelf?a.shelf:"None"} shelfTypes = {this.shelfTypes} update = {this.changeEm} all={a}/></div>)}
      </div>
      </div>
    )
  }
  // Serving as a part of a chain to transfer the id and shelf of the book
  // from the Book component to the App component to reflect changes
  changeEm = (id,shelf)=>{
    this.props.updateShelf(id,shelf)
  }
}

export default Shelf;
