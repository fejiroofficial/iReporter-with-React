import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import Aux from '../../hoc/Aux';
import RecordCard from './RecordCard/RecordCard';
import Classes from './Records.css';
import { interventionsRecords } from '../../actions/records';

const InterventionRecords = (props) => {
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
  ), []);

  return (
    <Aux>
      <div className={Classes.ManagerTitleHeader}>iManager</div>
      <div className={Classes.RecordContainer}>
        {
          userInterventionRecords.length !== 0 ?
            userInterventionRecords.map((userRecord, index) => (
              <RecordCard
                key={index}
                firstname={userRecord.firstname}
                lastname={userRecord.lastname}
                comment={userRecord.comment}
                date={dateFormat(userRecord.createdon)}
                status={userRecord.status}
                image={userRecord.profile_image}
                recordId={userRecord.id}
                recordType={userRecord.type}
              />
            ))
            : <div className={Classes.EmptyRecordContainer}>
              <RecordCard
                firstname=""
                lastname=""
                comment="*You currently have no interventions records"
                status=""
                date=""
                image=""
                recordId=""
                recordType=""
              />
            </div>
        }
      </div>
    </Aux>
  );
};

export default connect(() => ({}), { interventionsRecords })(InterventionRecords);
