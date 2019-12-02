import React from "react"
import ReactDOM from "react-dom"
import Demo from "@/Demo"
import Logo from "./images/logo.png"
import './index.scss'
class Hello extends React.Component{

  handleClick = (e) => {
    console.log(e)
  }

  render(){
    return (
      <div>
        <Demo />
        <img className="logo" src={ Logo } onClick={this.handleClick} />
      </div>
    )
  }
}
ReactDOM.render(<Hello />,document.getElementById("root"));