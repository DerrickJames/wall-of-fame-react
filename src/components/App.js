import React, {PropTypes} from 'react';
import HomeHeader from './home/HomeHeader';
import {connect} from 'react-redux';
import classNames from 'classnames';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <HomeHeader loading={this.props.loading}/>

        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function manageBodyElementBackground(ownProps) {
  const bodyElement = document.getElementById('main-body');

  (ownProps.location.pathname.length > 1) ?
    bodyElement.classList.add('body-default') :
    bodyElement.classList.remove('body-default');
}

function mapStateToProps(state, ownProps) {
  manageBodyElementBackground(ownProps);

  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
