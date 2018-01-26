import React from "react"
import * as api from "./BooksAPI"
class BookDetails extends React.Component{
  state={
    book: ""
  }
  componentDidMount(){
    api.get(this.props.query).then((book)=>{
      this.setState({book})
    })
  }
  render(){
    return <div className="container b-details z-depth-4">
    <div className="row">
    <div className="col s12 shelf-header">
    <span className="center-align">{this.state.book.title}</span>
    </div>
    </div>

    <div className="row">

    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
    </div>
    </div>
  }
}

export default BookDetails;
