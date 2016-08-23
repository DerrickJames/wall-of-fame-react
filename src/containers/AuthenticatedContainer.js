import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/Header';

class AuthenticatedContainer extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    if (! isAuthenticated) return false;

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AuthenticatedContainer.propTypes = {
    children: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(AuthenticatedContainer);
