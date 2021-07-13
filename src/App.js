import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    cep: {}
  }

  handleTextChange(e) {
    fetch(`https://viacep.com.br/ws/${e.target.value}/json`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        cep: res
      })
    })
  }

  render() {
    return (
      <div>
        <strong>Olá, {this.props.name}</strong>
        <div>Digite o cep: <input type="text" onChange={this.handleTextChange.bind(this)}></input>
        {Object.entries(this.state.cep).map((values, key) => (
          <h2 key={key}><strong>{values[0]}: {values[1]}</strong></h2>
        ))}      
        </div>
       
      </div>
    )
  }
}


export default App;
