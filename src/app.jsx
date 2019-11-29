import React from "react"
import ReactDOM from "react-dom"
import Demo from "@/Demo"
import Logo from "./images/logo.png"
import './index.scss'
class Hello extends React.Component{
  render(){
    return (
      <div>
        <Demo />
        <img className="logo" src={ Logo } />
      </div>
    )
  }
}
ReactDOM.render(<Hello />,document.getElementById("root"));