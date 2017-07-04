import React, { Component } from 'react';
import { connect } from 'react-redux';
import jquery from 'jquery';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onInvia} >
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



const onInviaAction = () => {
  return (dispatch, getState) => {
    const { nome, cognome } = getState()
    dispatch({type: 'LOADING'})
    jquery.post('/api/test', {nome, cognome}, (data) => {
      console.log(data);
      dispatch({type: 'SUBMIT_SUCCESS', payload: data.output})
    })
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
    },
    onInvia(e) {
      e.preventDefault()
      return dispatch(onInviaAction())
    }
  })
)(Form)


export default FormContainer;
