import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../redux/actions/profileActions';
import ProfileList from './ProfileList';
import {browserHistory} from 'react-router';

class ProfilesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddProfilePage = this.redirectToAddProfilePage.bind(this);
    }

    profileRow(profile, index) {
        return <div key={index}>{profile.firstName}</div>;
    }

    redirectToAddProfilePage() {
        browserHistory.push('/profile');
    }

    render() {
        const {profiles} = this.props;

        return (
            <div className="main-content">
                <div className="col-md-12 clearfix add-profile">
                    <span className="header-label">Profiles</span>
                    <input
                        type="submit"
                        value="Add Profile"
                        className="btn landing-page-btn pull-right"
                        onClick={this.redirectToAddProfilePage}/>
                </div>
                <ProfileList profiles={profiles}/>
            </div>
        );
    }
}

ProfilesPage.propTypes = {
    profiles: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        profiles: state.profiles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(profileActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesPage);
