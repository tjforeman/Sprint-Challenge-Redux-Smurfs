import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChanges} placeholder='name' name='name'
          />
          <input type='text' onChange={this.handleChanges} value={this.state.age} placeholder='age'name='age'
          />
          <input type='text'onChange={this.handleChanges} value={this.state.height} placeholder='height'name='height'
          />
        </form>
        <button onClick={() => this.props.addSmurf(this.state)}>Add Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {smurfs:state.smurfs};
};

export default connect(mapStateToProps,{ addSmurf})(Form);