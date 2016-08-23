import React, {PropTypes} from 'react';
import ProfileListCard from './ProfileListCard';

const ProfileList = ({profiles}) => {
  return (
    <div className="row">
      {profiles.map(profile => <ProfileListCard key={profile.id} profile={profile}/>)}
    </div>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.array.isRequired
};

export default ProfileList;
