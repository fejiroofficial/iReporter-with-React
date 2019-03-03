import React from 'react';
import Aux from '../../hoc/Aux';
import RecordCard from './RecordCard/RecordCard';
import Classes from './Records.css';

const records = () => (
  <Aux>      
    <div className={Classes.ManagerTitleHeader}>iManager</div>
    <div className={Classes.RecordContainer}>
          <RecordCard />
    </div>
  </Aux>
);

export default records;
