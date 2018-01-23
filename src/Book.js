import React from "react"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
class Book extends React.Component{

  handleChange=()=>{
    console.log("Clicked")
  }

  render(){

    return (
      <div>
      <div className="potato" style={{background:`url(${this.props.thumb}) no-repeat`,backgroundSize:`cover`}} >
      <div className = "butt">      <DropDownMenu value="Yes" onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
              </DropDownMenu></div>
      </div>

      <p className="center-align">{this.props.title}</p>

      <span className="smally">-{this.props.authors[0]}</span>
      </div>
    )
  }
}

export default Book;
