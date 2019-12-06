import React from "react"
import Demo from "@/Demo"
import Logo from "@/images/logo.png"

const App = () => {
  return (
    <div>
      <Demo />
      <img className="logo" src={ Logo } onClick={this.handleClick} />
    </div>
  )
}


export default App