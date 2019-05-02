/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { ClipLoader } from 'react-spinners';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import Classes from './SpecificRecord.css';
import { fetchRecord } from '../../../actions/records';
import { updateCommentAction, updateLocationAction } from '../../../actions/updateRecord';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '500px',
    height: '300px',
    transform: 'translate(-50%, -50%)'
  }
};

const SpecificRecord = (props) => {

  const [locationData, setLocationData] = useState({
    latitude: '',
    longitude: '',
  });

  const [location, setLocation] = useState('');

  const handleChange = address => {
    setLocation(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setLocation(results[0].formatted_address);
        return getLatLng(results[0]);
      })
      .then(latLng => {
        //dispatch an action here to update the lat and long state
        setLocationData({
          ...locationData,
          latitude: latLng.lat,
          longitude: latLng.lng,
        });
      })
      .catch(error => alert(error));
  };

  const {
    match: { params },
    isLoading,
    recordData,
    latitude,
    longitude,
  } = props;

  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [commentInput, setCommentInput] = useState({
    comment: '',
  });

  const openModal = () => {
    setShowModal(true);
    setShowCommentModal(true);
  };

  const openLocationModal = () => {
    setShowModal(true);
    setShowCommentModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowCommentModal(false);
  };

  const fetchRecordHandler = () => {
    props.fetchRecord(params);
  };

  const updateCommentInput = event => {
    setCommentInput({ ...commentInput, [event.target.name]: event.target.value });
  };

  const updateCommentSubmitHandler = () => {
    props.updateCommentAction(commentInput, params);
  };

  const updateLocationSubmitHandler = () => {
    props.updateLocationAction(locationData, params);
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
    minHeight: '315px',
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
              <button onClick={() => openModal()}>Edit</button>
              <div className={Classes.EditIcon} />
              <div className={Classes.RecordDocumentComment}>{recordData.comment}</div>
            </div>
            <div className={Classes.ReportDocumentDetailPhoto}>
              PhotoEvidence:
          <div style={photoEvidence} />
            </div>
            <div className={Classes.ReportDocumentDetailPhoto}>
              Location:
               <button onClick={() => openLocationModal()}>Edit</button>
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
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className={Classes.ModalCancelBtn} onClick={() => closeModal()}>X</button>
        {
          showCommentModal ?
            <div>
              <textarea
                name="comment"
                className={Classes.ModalTextarea}
                placeholder={recordData.comment} cols="30" rows="5"
                onChange={(event) => updateCommentInput(event)} />
              <button className={Classes.ModalBtn} onClick={() => updateCommentSubmitHandler()}>Update comment</button>
            </div>
            :
            <div>
              <h1>Edit location</h1>
              <div className={Classes.PacContainer}>
                <PlacesAutocomplete
                  value={location}
                  onChange={handleChange}
                  onSelect={handleSelect}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div className={Classes.InputBox}>
                      <input
                        className={Classes.PacInput}
                        {...getInputProps({
                          placeholder: 'Enter a location',
                        })}
                        value={location}
                      />
                      <div className={Classes.AutoCompleteContainer}>
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                          const style = suggestion.active
                            ? { backgroundColor: 'lightseagreen', cursor: 'pointer', color: 'white' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                                key: 1,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
              <button className={Classes.ModalBtn} onClick={() => updateLocationSubmitHandler()}>Update location</button>
            </div>
        }
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.specificRecord.loading,
  message: state.specificRecord.message,
  recordData: state.specificRecord.data,
  latitude: state.specificRecord.latitude,
  longitude: state.specificRecord.longitude,
  commentLoading: state.updateCommentReducer.loading,
  commentMessage: state.updateCommentReducer.message,
});

export default connect(mapStateToProps, 
  { fetchRecord, 
    updateCommentAction,
    updateLocationAction })(SpecificRecord);
