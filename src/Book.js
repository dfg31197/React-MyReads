import React from "react"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Modal from "react-responsive-modal"

/*
  This component represents a book in a book-shelf. Clicking on the thumbnail
  triggers a modal ~ react-responsive-modal used here~ displaying further details

  Material-ui's DropDownMenu is included to represent/change the state of the book
  regarding the available book-shelf types
*/

class Book extends React.Component {
    state = {
        shelf: this.props.shelf,
        open: false
    }

    // Handles the responsive modal states
    onOpenModal = () => {
        this.setState({
            open: true
        });
    };
    // Handles the responsive modal states
    onCloseModal = () => {
        this.setState({
            open: false
        });
    };

    handleChange = (obj) => {
        if (obj.target.innerHTML !== this.state.shelf) {
            // Converting my custom shelf property to the possibly pre-defined values of "shelf" property and vice versa
            let theState = '';
            if (obj.target.innerHTML === `Currently Reading` || obj.target.innerHTML === `currentlyReading`) {
                theState = `currentlyReading`
            } else if (obj.target.innerHTML === `Read` || obj.target.innerHTML === `read`) {
                theState = `read`
            } else if (obj.target.innerHTML === `WishList` || obj.target.innerHTML === `wantToRead`) {
                theState = `wantToRead`
            } else {
                theState = `none`
            }
            this.props.update(this.props.id, theState)
        }
    }
    componentWillReceiveProps(newProps) {
        const shelf = newProps.shelf
        //console.log(shelf)
        this.setState({
            shelf
        })
    }

    render() {

        return (

            <div style={{position:"relative"}}>
      <div className = "butt">      <DropDownMenu value="Yes" onChange={this.handleChange}>
                {this.props.shelfTypes.map((shelf) =>{
                  let text = shelf;

                  text === this.props.shelf && (
                    text = `✓ ` + text
                  )
                  return <MenuItem key={shelf} value={shelf} primaryText={text} />
                })}

              </DropDownMenu></div>
      <div className="potato" onClick={this.onOpenModal} style={{background:`url(${this.props.thumb}) no-repeat`,backgroundSize:`cover`}} >

      </div>

      <Modal open={this.state.open} onClose={this.onCloseModal}>
      <div className="container model">  <div className="row">
        <div className="col s2 thumbImage" style={{backgroundImage:`url(${this.props.thumb})`,backgroundSize:'cover'}}>
        </div>
        <div className="col s10 center-align">
        <span className ="modal-header">{this.props.title}</span>
        <p className="modal-header"><span style={{color:"darkorange"}}>✪</span>{this.props.all.averageRating?`${this.props.all.averageRating}`:"Unrated"}</p>
        </div>
        </div>
        <div className="divider"/>
        <div className="section">
        <p className="modal-details-text">{this.props.all.description?this.props.all.description:"-No description available.-"}</p>

        <p style={{fontStyle:"italic",fontSize:"2vh"}}>~{this.props.all.pageCount} Pages</p>
        </div>


        <div className="row book-links">
        <div className="col s4">
        <p className="modal-details-text"><a href={this.props.all.canonicalVolumeLink}>Canonical Link</a></p>
        </div>

        <div className="col s4">
        <p className="modal-details-text"><a href={this.props.all.infoLink}>More Info</a></p>
        </div>

        <div className="col s4">
        <p className="modal-details-text"><a href={this.props.all.previewLink}>Preview</a></p>
        </div>
        </div>


        <p className="modal-footer">© Published on {this.props.all.publishedDate}. All rights reserved</p>
        </div>
</Modal>
      <p  className="center-align truncate">{this.props.title}</p>
      <span className = "smally">{this.props.authors?this.props.authors[0]:"Potato"}</span>

      </div>
        )
    }
}

export default Book;
