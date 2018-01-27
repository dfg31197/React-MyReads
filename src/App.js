import React, {
    Component
} from 'react';
import Shelf from "./Section"
import {
    Link
} from "react-router-dom"
import "./logo.svg"
import * as api from "./BooksAPI"

/*
  This component acts as the landing page - that is the personal book shelf of the user.

*/

class App extends Component {
    state = {
        reading: [],
        read: [],
        wish: [],
        load: false

    }


    // This function is responsible for ultimately setting the state of the app to reflect changes in the shelf status of books
    potato = () => {
        // To start the loading animation
        this.setState({
            load: false
        })
        api.getAll().then((books) => {
            // Sorting books into respective categories

            const reading = []
            const read = []
            const wish = []
            const load = true

            for (let book of books) {
                // Converting my custom shelf property to the possibly pre-defined values of "shelf" property and vice versa
                if (book.shelf === "currentlyReading" || book.shelf === "Currently Reading") {
                    book.shelf = `Currently Reading`
                    reading.push(book)
                } else if (book.shelf === `read` || book.shelf === `Read`) {
                    book.shelf = `Read`
                    read.push(book)
                } else if (book.shelf === `wantToRead` || book.shelf === `WishList`) {
                    book.shelf = `WishList`
                    wish.push(book)
                }
            }

            this.setState({
                reading,
                read,
                wish,
                load
            })
        })
    }


    componentDidMount() {
        this.potato()
    }

    // Contacts back end API to make changes in the server about the shelf property of the book
    handleUpdate = (id, shelf) => {
        api.get(id).then((book) => {
            return api.update(book, shelf);
        }).then(this.potato)
    }
    render() {
        //Handles the loading animation
        if (this.state.load) {
            return (
                <div>
    <Link to="/add"><div className="floatingButt"><span aria-label="default" role="img">📚</span></div></Link>
    <div className="row header valign-wrapper">
    <div className="col s12">
    <span>MyReads</span>
    </div>
    </div>
    <Shelf key={1} shelftype="Currently Reading" books={this.state.reading} updateShelf={this.handleUpdate} />
    <Shelf key={2} shelftype="Read" books={this.state.read} updateShelf={this.handleUpdate}/>
    <Shelf key={3} shelftype="Wishlist" books={this.state.wish} updateShelf={this.handleUpdate}/>
    <div className = "divider foo"  />
    <footer> </footer>
    </div>
            )
        } else {
            return (<div>
    <Link to="/add"><div className="floatingButt"><span aria-label="default" role="img">📚</span></div></Link>
    <div className="row header valign-wrapper">
    <div className="col s12">
    <span>MyReads</span>
    </div>
    </div>

    <div className="myPreloader">
    <div className="preloader-wrapper big active">
  <div className="spinner-layer spinner-blue-only">
    <div className="circle-clipper left">
      <div className="circle"></div>
    </div><div className="gap-patch">
      <div className="circle"></div>
    </div><div className="circle-clipper right">
      <div className="circle"></div>
    </div>
  </div>
</div>
    </div>
    </div>)
        }
    }
}

export default App;
