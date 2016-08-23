import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from '../common/LoadingDots';

const HomeHeader = ({loading}) => {
    return (
        <nav id="main-nav"
            className="navbar navbar-default navbar-fixed-top landing-page-nav">
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
                    <ul className="nav navbar-nav navbar-right">
                      <li><Link to="/login" activeClassName="active link">Login</Link></li>
                      <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

HomeHeader.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default HomeHeader;
