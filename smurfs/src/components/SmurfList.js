import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = props =>{
  return (
    <div>
      <p>
        {props.smurfs.map(smurf => {
          return (
            <Smurf name={smurf.name}key={smurf.id} age={smurf.age} height={smurf.height} id={smurf.id}/>
          );
        })}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { 
      smurfs: state.smurfs 
    };
};
export default connect(mapStateToProps)(SmurfList);