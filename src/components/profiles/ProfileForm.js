import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const ProfileForm = ({profile, allUsers, onSave, onChange, errors, saving}) => {
  return (
    <div>
      <span className="header-label">Manage Profile</span>
      <form>
        <TextInput
          name="firstName"
          label="Firstname"
          value={profile.firstName}
          onChange={onChange}
          error={errors.firstName}/>

        <TextInput
          name="lastName"
          label="Lastname"
          value={profile.lastName}
          onChange={onChange}
          error={errors.lastName}/>

        <TextInput
          name="location"
          label="Location"
          value={profile.location}
          onChange={onChange}
          error={errors.location}/>

        <TextInput
          name="biography"
          label="Biography"
          value={profile.biography}
          onChange={onChange}
          error={errors.biography}/>

        <TextInput
          name="avatar"
          label="Avatar"
          value={profile.avatar}
          onChange={onChange}
          error={errors.avatar}/>

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
      </form>
    </div>
  );
};

ProfileForm.propTypes = {
  profile: PropTypes.object.isRequired,
  allUsers: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ProfileForm;
