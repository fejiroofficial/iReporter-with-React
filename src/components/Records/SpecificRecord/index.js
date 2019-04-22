import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { ClipLoader } from 'react-spinners';
import GoogleMapReact from 'google-map-react';
import Classes from './SpecificRecord.css';
import { fetchRecord } from '../../../actions/records';

const SpecificRecord = (props) => {
  const { match: { params }, isLoading, recordData, latitude, longitude } = props;

  const fetchRecordHandler = () => {
    props.fetchRecord(params);
  };

  useEffect(() => (
    fetchRecordHandler()
  ), []);

  const recordDocumentImage = {
    height: '174px',
    width: '160px',
    backgroundImage: `url(${recordData.profile_image})`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat'
  };

  const photoEvidence = {
    height: '315px',
    marginTop: '5px',
    width: 'inherit',
    backgroundImage: `url(${recordData.image_url})`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat'
  };

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11
  };

  const renderMarkers = (map, maps) => {
    new maps.Marker({
      position: defaultProps.center,
      map,
      title: '',
    });
  };

  return (
    <div className={Classes.RecordDocumentContainer}>
      {isLoading
        ?
        <div className="reset_spinner_box">
          <ClipLoader
            size={50}
            color="lightseagreen"
          />
        </div>
        :
        <div className={Classes.RecordDocument}>
          <div className={Classes.FileIcon} />
          <div style={recordDocumentImage} />
          <div className={Classes.RecordDocumentDetails}>
            <div className={Classes.ReportDocumentDetail}>
              Name: {`${recordData.firstname} ${recordData.lastname}`}
            </div>
            <div className={Classes.ReportDocumentDetail}>
              Email: {recordData.email}
            </div>
            <div className={Classes.ReportDocumentDetail}>
              Telephone: {recordData.telephone}
            </div>
            <div className={Classes.ReportDocumentDetail}>
              Type of Report: {recordData.type}
            </div>
            <div className={Classes.ReportDocumentDetail}>
              Date: {dateFormat(recordData.createdon)}
            </div>
            <div className={Classes.ReportDocumentDetail}>
              Status: {recordData.status}
            </div>
            <div className={Classes.ReportDocumentDetailComment}>
              Details:
          <div className={Classes.EditIcon} />
              <div className={Classes.RecordDocumentComment}>{recordData.comment}</div>
            </div>
            <div className={Classes.ReportDocumentDetailPhoto}>
              PhotoEvidence:
          <div style={photoEvidence} />
            </div>
            <div className={Classes.ReportDocumentDetailPhoto}>
              Location:
            <div className={Classes.EditIcon} />
              <div className={Classes.LocationEvidence} >
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyCwgCxx2efBe3cZftpuHDdYbUk5Hch91oE' }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                  <div lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
                </GoogleMapReact>
              </div>
            </div>
            <div className={Classes.ReportDocumentDetail}>A record once deleted cannot be retrieved</div>
            <button className={Classes.DeleteBtn}>Delete Record</button>
          </div>
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.specificRecord.loading,
  message: state.specificRecord.message,
  recordData: state.specificRecord.data,
  latitude: state.specificRecord.latitude,
  longitude: state.specificRecord.longitude,
});

export default connect(mapStateToProps, { fetchRecord })(SpecificRecord);
