import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form'
import View from './view'

const Title = ({title}) => (
  <h2>{title}</h2>
)

class App extends Component {
  constructor(props) {
    super(props)
    const { title } = props
    this.state = {
      title,
      nome : "",
      cognome : "",
      loading: ""
    }
  }
  _onSubmit(nome, cognome) {
    this.setState({loading: 'Loading...'})
    setTimeout(() => {
      this.setState({
        nome, cognome, loading: ''
      })
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title={this.state.title}
          ></Title>
        </div>
        <div className="App-intro">
          {this.state.loading}
          <Form onPassaTest={(nome, cognome) => this._onSubmit(nome , cognome)} />
          <View nome={this.state.nome} cognome={this.state.cognome} />
        </div>
      </div>
    );
  }
}

export default App;
