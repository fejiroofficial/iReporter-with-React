import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './RecordCard.css';
import DisplayPicture from '../../DisplayPicture/DisplayPicture';

const recordCard = (props) => {
  const { recordId, recordType} = props;
  const moreDetailsUrl = `/ireport/${recordType}s/${recordId}`;
  return (
    <div className={Classes.RecordCard}>
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
      <div className={Classes.Comment}>{props.comment}</div>
      <div className={Classes.CardFooter}>
        <div className={Classes.StatusHolder}>Status: {props.status}</div>
        <div className={Classes.DetailsHolder}>
          <div className={Classes.Details}>
            For more details click
            <Link to={moreDetailsUrl}>
              <button>here</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recordCard;
