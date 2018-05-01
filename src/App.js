import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'//con mayusculas para que no lo confunda react con html
import Despedida from './components/Despedida'

class App extends Component {
  constructor(){ //el estado es como una variable global que le da definicion al componente
    super();
    this.state={
            saludo:"Hola desde React",
            despedida:"Adios desde react" // que desde el padre se imprima este texto y se muestre abajo de saludo
    }
   } 

  render() { //metodo propio de component que se encargara de renderear todo el html envevido
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Saludo text={this.state.saludo}/>
        <Despedida text={this.state.despedida}/>
        
      </div>
    );
  }
}

export default App;
