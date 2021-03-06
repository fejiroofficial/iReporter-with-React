import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './RecordCard.css';
import DisplayPicture from '../../DisplayPicture/DisplayPicture';

const recordCard = (props) => {
  const { recordId, recordType, recordImage} = props;

  const recordCardImage = {
    height: '150px',
    width: 'inherit',
    backgroundImage: `url(${recordImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat'
};

  const moreDetailsUrl = `/user/ireport/${recordType}s/${recordId}`;
  return (
    <Link className={Classes.RecordCardContainer} to={moreDetailsUrl}>
      <div className={Classes.RecordCard}>
        <div style={recordCardImage} />
        comment:
        <div className={Classes.Comment}>{props.comment}</div>
        <div className={Classes.InfoPanel}>
          <DisplayPicture image={props.image} />
          <div className={Classes.NameDateDiv}>
            <div className={Classes.NameDiv}>{`${props.firstname} ${props.lastname}`}</div>
            <div className={Classes.DateDiv}>{props.date}</div>
          </div>
          <div className={Classes.IconHolder}>
            <div className={Classes.RedFlagIcon} />
          </div>
        </div>
        <div className={Classes.CardFooter}>
          <div className={Classes.StatusHolder}>Status: {props.status}</div>
        </div>
      </div>
    </Link>
  );
};

export default recordCard;
