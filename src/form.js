import React, { Component } from 'react';


class Form extends Component {

  _submit(e) {
    const { nome, cognome } = this.props;
    e.preventDefault();
    this.props.onSubmitPadre(nome , cognome);
    //console.log({nome , cognome});
  }
  render() {
    return (
      <form onSubmit={e => this._submit(e)}>
        <input type="text" onChange={e => this.props.onChangeN(e.target.value)} value={this.props.nome} name="nome" id="nome" placeholder="nome"></input>
        <input type="text" onChange={e => this.props.onChangeC(e.target.value)} value={this.props.cognome} name="cognome" id="cognome" placeholder="cognome"></input>
        <input type="submit" value="invia"></input>
      </form>
    )
  }
}

export default Form;
