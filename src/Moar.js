import React from 'react';
import Shelf from "./Section"
import {
    Link
} from "react-router-dom"
import * as api from "./BooksAPI"

class Moar extends React.Component {
    state = {
        input: "",
        results: [],
        load: true
    }
    handleUpdate = (id, shelf) => {
        api.get(id).then((book) => {
            api.update(book, shelf).then((res) => {
                // Converting my custom shelf property to the possibly pre-defined values of "shelf" property and vice versa
                let thisState = "";
                if (shelf === "currentlyReading" || shelf === "Currently Reading") {
                    thisState = "Currently Reading"
                } else if (shelf === `read` || shelf === `Read`) {
                    thisState = "Read"
                } else if (shelf === `wantToRead` || shelf === `WishList`) {
                    thisState = "WishList"
                } else {
                    thisState = "none"
                }
                this.setState((old) => {
                    let x = old.results.map((a) => {
                        if (a.id === book.id) {
                            a.shelf = thisState;
                        }
                        return a;
                    })
                    return {
                        results: x
                    }
                })
            })
        })
    }
    render() {
        // Logic for the loading animation
        if (this.state.load) {
            return (
                <div>

        <div className="row">
          <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="row">

              <div className="input-field col s12 moar-head">
                <Link to="/" className="back valign-wrapper">↤</Link><input id="icon_prefix" type="text" className="validate" placeholder="Search Books Here!" onChange={this.handleSearch} value={this.state.input}/>

              </div>

            </div>
          </form>
        </div>

        { this.state.results && (<Shelf key={4} shelftype="Moar Books" books={this.state.results} updateShelf={this.handleUpdate} />)}
      </div>
            )
        } else {
            return (
                <div>
      <div className="row">
        <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>
          <div className="row">

            <div className="input-field col s12 moar-head">
              <Link to="/" className="back valign-wrapper">↤</Link><input id="icon_prefix" type="text" className="validate" placeholder="Search Books Here!" onChange={this.handleSearch} value={this.state.input}/>

            </div>

          </div>
        </form>
      </div>
    {this.state.input !== 0 && (
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
    )}
      </div>
            )
        }
    }

    //Responsible for handling the search query and updating the state of the component
    handleSearch = (a) => {
        // Starts the loading animation and update the query state of the component
        this.setState({
            input: a.target.value,
            load: false
        })
        api.search(a.target.value).then((res) => {
            if (res) {
                if (res.length > 0) {
                    /*
                    Gets all the user's book to compare with the search results and add
                    the shelf property to searched books since searched book objects do
                    not contain shelf property
                    */
                    api.getAll().then((landing) => {
                        for (let searchBook of res) {
                            searchBook.shelf = "None"
                            for (let yourBook of landing) {
                                // Converting my custom shelf property to the possibly pre-defined values of "shelf" property and vice versa
                                let thisState = "";
                                if (yourBook.shelf === "currentlyReading" || yourBook.shelf === "Currently Reading") {
                                    thisState = "Currently Reading"
                                } else if (yourBook.shelf === `read` || yourBook.shelf === `Read`) {
                                    thisState = "Read"
                                } else if (yourBook.shelf === `wantToRead` || yourBook.shelf === `WishList`) {
                                    thisState = "WishList"
                                }
                                if (searchBook.id === yourBook.id) {
                                    //Adding shelf property to search results
                                    searchBook.shelf = thisState
                                }
                            }
                        }

                        //Stops the animation and renders the results on screen
                        this.setState({
                            results: res,
                            load: true
                        })
                    })
                }
            }

        })

    }

}

export default Moar;
