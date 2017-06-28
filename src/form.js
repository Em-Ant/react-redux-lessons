import React, { Component } from 'react';


class Form extends Component {

  _click () {
    const nome = this.refs.nome.value
    const cognome = this.refs.cognome.value
    this.props.onPassaTest(nome, cognome);
  }
  render() {
    return (
      <form>
        <input type="text" ref="nome" name="nome" id="nome" placeholder="nome"></input>
        <input type="text" ref="cognome" name="cognome" id="cognome" placeholder="cognome"></input>
        <input type="button" value="invia" onClick={e => this._click()}></input>
      </form>
    )
  }
}

export default Form;
