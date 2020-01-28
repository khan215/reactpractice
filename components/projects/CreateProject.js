/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import createProject from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (e) => {
    const { target } = e;

    this.setState(state => ({
      ...state,
      [target.id]: target.value,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { props, state } = this;
    props.createProject(state);

    props.history.push('/');
  }

  render() {
    // const { auth } = this.props;
    // if (!auth.uid) {
    //   return <Redirect to="/signin" />;
    // }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea name="content" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.firebase.auth,
// });

const mapDispatchToProps = dispatch => ({
  createProject: projects => dispatch(createProject(projects)),
});

export default connect(null, mapDispatchToProps)(CreateProject);