import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';
import toastr from 'toastr';
import * as _ from 'lodash';
import * as authActions from '../../redux/actions/authActions';
import Validator from '../../validator';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      submitting: false,
      credentials: Object.assign({}, this.props.credentials)
    };

    this.authenticateUser = this.authenticateUser.bind(this);
    this.updateCredentialState = this.updateCredentialState.bind(this);
  }

  _isValid(field = null) {
    let validate = Validator.createValidator({
      email: ['required', 'email'],
      password: ['required', 'minLength|8']
    }, this.state.credentials, field);

    let { isValid, errors } = validate;

    this.setState({ errors });

    return isValid;
  }

  renderErrors() {
    let errorMessage = [];
    let { error } = this.props.auth;

    if (Object.keys(error).length > 0) {
      if (error.hasOwnProperty('message')) {
        errorMessage.push(error.message);
      } else {
        Object.keys(error).map(key => errorMessage.push(error[key][0]));
      }

      if (errorMessage.length == 0) return false;
      toastr.error(errorMessage.join('<br/>'));
    }
  }

  authenticateUser(event) {
    event.preventDefault();

    if (!this._isValid()) return;

    this.setState({submitting: true});
    this.props.actions.authenticateUser(this.state.credentials)
      .then(() => {
        this.redirect();
      })
      .catch(response => {
        this.renderErrors();
        this.setState({submitting: false});
      });
  }

  updateCredentialState(event) {
    const field = event.currentTarget['name'];
    let credentials = this.state.credentials;

    credentials[field] = event.currentTarget['value'];

    let currentState = this.setState({credentials: credentials});

    this._isValid(field);
  }

  redirect() {
    this.setState({submitting: false});
    toastr.success('Login successful.');

    browserHistory.push('/profiles');
  }

  render() {
    const { credentials, errors, submitting } = this.state;

    return (
      <div className="main-content">
        <LoginForm
          credentials={credentials}
          errors={errors}
          submiting={submitting}
          onChange={this.updateCredentialState}
          onSave={this.authenticateUser}
        />
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  credentials: PropTypes.object,
  actions: PropTypes.object.isRequired
};

Login.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let credentials = {email: '', password: ''};

  return {
    auth: state.auth,
    credentials: credentials
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
