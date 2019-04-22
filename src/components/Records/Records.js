import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import Aux from '../../hoc/Aux';
import RecordCard from './RecordCard/RecordCard';
import Classes from './Records.css';
import { redflagRecords } from '../../actions/records';

const records = (props) => {
  const [userRecords, setUserRecords] = useState('');

  const getRecordsHandler = () => {
    props.redflagRecords().then(response => {
      if (response.data) {
        setUserRecords(response.data);
      }
    });
  };

  useEffect(() => (
    getRecordsHandler()
  ));

  return (
    <Aux>
      <div className={Classes.ManagerTitleHeader}>iManager</div>
      <div className={Classes.RecordContainer}>
        {
          userRecords ?
          userRecords.map((userRecord, index) => (
            <RecordCard
              key={index}
              firstname={userRecord.firstname}
              lastname={userRecord.lastname}
              comment={userRecord.comment}
              status={userRecord.status}
              date={dateFormat(userRecord.createdon)}
              image={userRecord.profile_image}
            />
          )) : null
        }
      </div>
    </Aux>
  );
};

export default connect(() => ({}), { redflagRecords })(records);
