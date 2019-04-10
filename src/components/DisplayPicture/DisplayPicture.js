import React from 'react';
import Classes from './DisplayPicture.css';

const displayPicture = (props) => (
     <div className={Classes.UserProfileImage} style={{ backgroundImage: `url(${props.image})` }}></div>
);

export default displayPicture;