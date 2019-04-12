import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


export const getSmurfs = () =>{
  return dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
    .get('http://localhost:3333/smurfs')
      .then(res => dispatch({ type: SUCCESS, payload: res.data }))
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const ADD_SMURF ='ADD_SMURF'
export const DELETE_SMURF='DELETE_SMURF'

export const addSmurf = newSmurf =>{
  return dispatch =>{
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => dispatch({type:ADD_SMURF, payload:res.data}))
      .catch(err => {
        dispatch({type:ERROR, payload:err});
      });
  };
};

export const deleteSmurf = id =>{
  return dispatch =>{
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>{
      dispatch({type:DELETE_SMURF,payload:res.data})
    })
    .catch(err =>{
      dispatch({type:ERROR, payload:err})
    })
  }
}