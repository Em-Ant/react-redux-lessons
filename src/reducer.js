
const initState = {
  title: 'Ciao',
  nome: "",
  cognome : ""
};

// {type: "RAFFO_CANTA", payload: {....}}

function onReset(state, payload) {
  console.log(payload);
  return {
    ...state,
    title : "",
    nome : "",
    cognome: ""
  };
}
function setNomeCognome(state, meta, payload) {
  const newState = {
    ...state,
  }
  newState[meta] = payload;
  return newState;
}
export default function reducer(state=initState, action) {
  console.log(action);
  switch (action.type) {

    case 'FIELDS_CHANGE':
      return setNomeCognome(state , action.meta , action.payload);

    case 'TITLE_CHANGE' :
      return {
        ...state,
        title: `${state.title} ${action.payload}`
      }

    case 'TITLE_RESET':
      return onReset(state, action.payload);

    default:
      return state;
  }
}
