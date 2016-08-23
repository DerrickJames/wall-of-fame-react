import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../redux/actions/profileActions';
import ProfileForm from './ProfileForm';
import toastr from 'toastr';
import { formattedUsername } from '../../selectors';

export class ManageProfilePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      profile: Object.assign({}, this.props.profile),
      errors: {},
      saving: false
    };

    this.saveProfile = this.saveProfile.bind(this);
    this.updateProfileState = this.updateProfileState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.profile.id !== nextProps.profile.id) {
      this.setState({profile: Object.assign({}, nextProps.profile)});
    }
  }

  profileFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.profile.firstName.length < 3) {
      errors.firstName = 'Firstname must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveProfile(event) {
    event.preventDefault();

    if (!this.profileFormIsValid()) return;

    this.setState({saving: true});
    this.props.actions.saveProfile(this.state.profile)
      .then((response) => {
        this.redirect();
      })
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Profile saved.');
    this.context.router.push('/profiles');
  }

  updateProfileState(event) {
    const field = event.target.name;
    let profile = this.state.profile;

    profile[field] = event.target.value;

    return this.setState({profile: profile});
  }

  render() {
    return (
      <div className="main-content">
        <ProfileForm
          profile={this.state.profile}
          errors={this.state.errors}
          onSave={this.saveProfile}
          onChange={this.updateProfileState}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageProfilePage.contextTypes = {
  router: PropTypes.object
};

function getProfileById(profiles, profileId) {
  const profile = profiles.filter(profile => profile.id === profileId);

  if (profile) return profile[0];

  return null;
}

function mapStateToProps(state, ownProps) {
  const profileId = ownProps.params.id;

  let profile = {
    id: '', firstName: '', lastName: '',
    location: '', biography: '', avatar: ''
  };

  if (profileId && state.profiles.length > 0) {
    profile = getProfileById(state.profiles, profileId);
  }

  return {
    profile: profile,
    username: formattedUsername(state.profiles)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfilePage);
