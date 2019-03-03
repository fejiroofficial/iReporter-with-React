import React from 'react';
import Classes from './RecordCard.css';
import DisplayPicture from '../../DisplayPicture/DisplayPicture';

const recordCard = () => (
  <div className={Classes.RecordCard}>
    <div className={Classes.InfoPanel}>
      <DisplayPicture />
      <div className={Classes.NameDateDiv}>
        <div className={Classes.NameDiv}>Fejiro Gospel</div>
        <div className={Classes.DateDiv}>21-02-93</div>
      </div>
      <div className={Classes.IconHolder}>
        <div className={Classes.RedFlagIcon}></div>
      </div>
    </div>
    <div className={Classes.Comment}>Hello I am a comment</div>
    <div className={Classes.CardFooter}>
      <div>Status: Draft</div>
      <div className={Classes.DetailsHolder}>
        <div className={Classes.Details}>For more details click <button>here</button></div>
      </div>

    </div>
  </div>
);

export default recordCard;
