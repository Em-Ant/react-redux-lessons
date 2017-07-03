import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return (
      <form >
        <input
          type="text"
          onChange={e => this.props.onFieldsChange('nome', e.target.value)}
          value={this.props.nome}
          name="nome"
          id="nome"
          placeholder="nome">
        </input>
        <input type="text"
          onChange={e => this.props.onFieldsChange('cognome', e.target.value)}
          value={this.props.cognome}
          name="cognome" id="cognome"
          placeholder="cognome">          
        </input>
        <input type="submit" value="invia"></input>
      </form>
    )
  }
}

const FormContainer = connect(
  state => ({
    nome: state.nome,
    cognome: state.cognome,
  }),
  dispatch => ({
    onFieldsChange(meta, payload) {
      return dispatch({type: 'FIELDS_CHANGE', meta, payload })
    }

  })
)(Form)


export default FormContainer;
