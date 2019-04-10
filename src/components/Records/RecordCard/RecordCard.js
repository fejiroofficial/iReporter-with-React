import React from 'react';
import Classes from './RecordCard.css';
import DisplayPicture from '../../DisplayPicture/DisplayPicture';

const recordCard = (props) => (
  <div className={Classes.RecordCard}>
    <div className={Classes.InfoPanel}>
      <DisplayPicture image={props.image}/>
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
        <div className={Classes.Details}>For more details click <button>here</button></div>
      </div>
    </div>
  </div>
);

export default recordCard;
