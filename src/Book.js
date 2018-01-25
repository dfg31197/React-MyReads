import React from "react"
import DropDownMenu from 'material-ui/DropDownMenu';
import {Link} from "react-router-dom"
import MenuItem from 'material-ui/MenuItem';
class Book extends React.Component{
  state = {
    shelf: this.props.shelf
  }
  handleChange=(obj)=>{
    if(obj.target.innerHTML !== this.state.shelf){
      this.props.update(this.props.id,obj.target.innerHTML)
    }
  }
  componentWillReceiveProps(newProps){
    const shelf = newProps.shelf
    //console.log(shelf)
    this.setState({shelf})
  }

  render(){

    return (

      <div>
      <Link key={`routerID${this.props.id}`} to={`/book/${this.props.id}`}><div className="potato" style={{background:`url(${this.props.thumb}) no-repeat`,backgroundSize:`cover`}} >
      <div className = "butt">      <DropDownMenu value="Yes" onChange={this.handleChange}>
                {this.props.shelfTypes.map((shelf) =>{
                  let text = shelf;

                  text === this.props.shelf && (
                    text = `✓ ` + text
                  )
                  return <MenuItem key={shelf} value={shelf} primaryText={text} />
                })}

              </DropDownMenu></div>
      </div></Link>

      <p className="center-align truncate">{this.props.title}</p>
      <span className = "smally">{this.props.authors?this.props.authors[0]:"Potato"}</span>

      </div>
    )
  }
}

export default Book;
