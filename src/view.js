import React from 'react';


const View = ({nomiCognomi=[],onSvuota}) => {
  const list = nomiCognomi.map((elem, i) => <li key={i}>{`${elem.nome} ${elem.cognome}`}</li> )
  return (  <div>
              <ul> {list} </ul>
              <input type="button" onClick={e => onSvuota(e)} value="Svuota"></input>
            </div>
          )
}

export default View;
