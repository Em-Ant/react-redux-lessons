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
      loading: "",
      list: []
    }
  }
  _svuota(){
    this.setState({list: []});
  }

  _onSubmit(nome, cognome) {
    this.setState({loading: 'Loading...'})
    const list = this.state.list
    setTimeout(() => {
      list.push({nome , cognome})
      this.setState({
        list , nome : "", cognome : "", loading: ''
      })
    }, 1000)
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
          { this.state.loading }
          <Form onSubmitPadre={this._onSubmit.bind(this)} onChangeN={ nome => this.setState({nome})}
                onChangeC={ cognome => this.setState({cognome})}
                nome={this.state.nome} cognome={this.state.cognome} />
              <View nomiCognomi={this.state.list} onSvuota={this._svuota.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
