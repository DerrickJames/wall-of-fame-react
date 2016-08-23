import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import SearchForm from './SearchForm';

const Header = ({loading, currentUser, isAuthenticated, searchForm}) => {
  return (
    <nav id="main-nav"
        className="navbar navbar-default navbar-fixed-top main-nav">
      <div className="container">
        <div className="navbar-header">
          <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">

              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">FAME</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="">
              <IndexLink to="/" activeClassName="active link">Home</IndexLink>
            </li>
            <li>
              <Link to="/profiles" activeClassName="active link">Profiles</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active link">About</Link>
            </li>
            <li>
              {loading && <LoadingDots interval={100} dots={20}/>}
            </li>
          </ul>

          {isAuthenticated &&
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  {currentUser.username} <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>}

          {searchForm && <SearchForm />}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  searchForm: PropTypes.bool.isRequired
};

export default Header;
