import React from 'react';
import {deleteSmurf} from '../actions'
import {connect} from 'react-redux'

const Smurf = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Height: {props.height} </p>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
    </div>
  );
};

 

export default connect(null,{deleteSmurf})(Smurf);