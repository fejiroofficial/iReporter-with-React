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
  ), []);

  return (
    <Aux>
      <div className={Classes.ManagerTitleHeader}>iManager</div>
      <div className={Classes.RecordContainer}>
        {
          userRecords && userRecords.length !== 0 ?
            userRecords.map((userRecord, index) => {
              return (
                <RecordCard
                  key={index}
                  firstname={userRecord.firstname}
                  lastname={userRecord.lastname}
                  comment={userRecord.comment}
                  status={userRecord.status}
                  date={dateFormat(userRecord.createdon)}
                  recordImage={userRecord.image_url}
                  image={userRecord.profile_image}
                  recordId={userRecord.id}
                  recordType={userRecord.type}
                />
              );
            })
            : <div className={Classes.EmptyRecordContainer}>
            <RecordCard
              firstname=""
              lastname=""
              comment="*You currently have no red-flag records"
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

export default connect(() => ({}), { redflagRecords })(records);
