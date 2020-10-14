import React from "react"
import logo from "../assets/img/ldfe.png"
import "../styles/App.scss"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LDFE</h1>
        <img className="App-logo" src={logo} alt="ldfe logo" />
      </header>
      <div className="App-link">
        <a target="blank" href="https://gitlab.com/LeonardoDaFonsecaEsteves">
          GitLab Leonardo Da Fonseca Esteves
        </a>
      </div>
    </div>
  )
}

export default App
