import { GET_SMURFS, SUCCESS, ERROR, ADD_SMURF, DELETE_SMURF } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      };
      case ADD_SMURF:
      return{
        ...state,
        smurfs:action.payload
      }
      case DELETE_SMURF:
      return{
        ...state,
        smurfs:action.payload
      }
    default:
      return state;
  }
};
export default rootReducer;