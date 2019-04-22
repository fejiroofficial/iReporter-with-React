import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import Aux from '../../hoc/Aux';
import RecordCard from './RecordCard/RecordCard';
import Classes from './Records.css';
import { interventionsRecords } from '../../actions/records';

const interventionRecords = (props) => {
  const [userInterventionRecords, setUserInterventionRecords] = useState('');
  
  const getRecordsHandler = () => {
    props.interventionsRecords().then(response => {
      if (response.data) {
        setUserInterventionRecords(response.data);
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
          userInterventionRecords ?
          userInterventionRecords.map((userRecord, index) => (
            <RecordCard
              key={index}
              firstname={userRecord.firstname}
              lastname={userRecord.lastname}
              comment={userRecord.comment}
              date={dateFormat(userRecord.createdon)}
              status={userRecord.status}
              image={userRecord.profile_image}
            />
          )) : null
        }
      </div>
    </Aux>
  );
};

export default connect(() => ({}), { interventionsRecords })(interventionRecords);
