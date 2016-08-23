import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class MainLayout extends React.Component {
  showSearchForm(location) {
    return location.pathname == '/profiles' ? true : false;
  }

  render() {
    const { loading, currentUser, isAuthenticated, location } = this.props;

    return (
      <div>
        <Header
          loading={loading}
          currentUser={currentUser}
          searchForm={this.showSearchForm(location)}
          isAuthenticated={isAuthenticated}/>

        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    currentUser: state.auth.currentUser,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(MainLayout);
