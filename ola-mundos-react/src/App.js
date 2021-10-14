
import './App.css';
import React, { Component } from "react";

class Classe extends Component {

  state = {
    mensagem: "React"
  };

  render() {
    return (
      <div className="App">
        <h1>Olá mundo {this.state.mensagem}</h1>
        <h2>Esse é meu componente de classe 🤯</h2>
      </div>
    );
  }
}

export default Classe

