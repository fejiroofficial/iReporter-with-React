import React from 'react';
import Classes from './SpecificRecord.css';

const SpecificRecord = () => {
  return (
    <div className={Classes.RecordDocumentContainer}>
      <div className={Classes.RecordDocument}>
        <div className={Classes.FileIcon} />
        <div className={Classes.RecordDocumentImage} />
        <div className={Classes.RecordDocumentDetails}>
          <div className={Classes.ReportDocumentDetail}>Name: Fejiro</div>
          <div className={Classes.ReportDocumentDetail}>Email:</div>
          <div className={Classes.ReportDocumentDetail}>Telephone:</div>
          <div className={Classes.ReportDocumentDetail}>Type of Report:</div>
          <div className={Classes.ReportDocumentDetail}>Date:</div>
          <div className={Classes.ReportDocumentDetail}>Status:</div>
          <div className={Classes.ReportDocumentDetailComment}>
            Details:
          <div className={Classes.EditIcon} />
            <div className={Classes.RecordDocumentComment}>comment goes here</div>
          </div>
          <div className={Classes.ReportDocumentDetailPhoto}>
            PhotoEvidence:
          <div className={Classes.PhotoEvidence} />
          </div>
          <div className={Classes.ReportDocumentDetailPhoto}>
            Location:
            <div className={Classes.EditIcon} />
            <div className={Classes.LocationEvidence} />
          </div>
          <div className={Classes.ReportDocumentDetail}>A record once deleted cannot be retrieved</div>
          <button className={Classes.DeleteBtn}>Delete Record</button>
        </div>
      </div>
    </div>
  );
};

export default SpecificRecord;
