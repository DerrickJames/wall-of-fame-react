import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import avatarPlaceholder from '../../assets/images/profiles/avatars/avatar3.jpg';

const ProfileListCard = ({profile}) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={avatarPlaceholder} alt={profile.avatar}/>
        <div className="caption">
          <h3>
            <Link to={'/profile/' + profile.id}>
              {profile.firstName + ' ' + profile.lastName}
            </Link>
          </h3>
          <small className="text-center">{profile.location}</small>
          <p>{profile.biography}</p>
          <p>
            <strong>Tags:</strong> React, Redux, NodeJS
          </p>
        </div>
      </div>
    </div>
  );
};

ProfileListCard.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileListCard;
