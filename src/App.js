import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form'
// import View from './view'

import { connect } from 'react-redux'

const Title = ({title}) => (
  <h2>{title}</h2>
)

const App = props => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={props.title} />
      </div>
      {/*
      <div className="App-intro">
        { this.state.loading }
        <Form onSubmitPadre={this._onSubmit.bind(this)} onChangeN={ nome => this.setState({nome})}
              onChangeC={ cognome => this.setState({cognome})}
              nome={this.state.nome} cognome={this.state.cognome} />
            <View nomiCognomi={this.state.list} onSvuota={this._svuota.bind(this)} />
      </div>
      */}
      <Form />
      <div>{props.out}</div>
      <button type="button" onClick={props.onTitleChange}>
        Cambia Titolo
      </button>
      <button type="button" onClick={props.onTitleReset}>
        Resetta
      </button>
    </div>
  );
}

const AppContainer = connect(
  state => ({
    title: state.title,
    nome : state.nome,
    cognome : state.cognome,
    out: state.out
  }),
  dispatch => ({
    onTitleChange() {
      return dispatch({type: 'TITLE_CHANGE', payload: 'Raffo'})
    },
    onTitleReset: (e) => {
      return dispatch({type: "TITLE_RESET" , payload: "ho resettato"})
    }
  })
)(App)

export default AppContainer;
