/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import { ClipLoader } from 'react-spinners';
import {  failureToast } from '../../actions/toast';
import { ToastContainer } from 'react-toastify';
import CloudinaryWidget from '../CloudinaryWidget';
import Classes from './Report.css';
import Aux from '../../hoc/Aux';
import { reportIncident } from '../../actions/report';


const Report = (props) => {

  const [formData, setFormData] = useState({
    comment: '',
    latitude: '',
    longitude: '',
    incidentType: 'red-flags',
    image: '',
  });

  const [location, setLocation] = useState('');

  const { isLoading } = props;

  const updateCommentInput = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChange = address => {
    setLocation(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setLocation(results[0].formatted_address);
        return getLatLng(results[0]);
      })
      .then(latLng => setFormData({
        ...formData,
        latitude: latLng.lat,
        longitude: latLng.lng,
      }))
      .catch(error => props.failureToast(error));
  };

  /** updating state with the cloudinary url */
  const cloudinaryUpdate = (imageUrl) => {
    setFormData({ ...formData, image: imageUrl });
  };

  let widget;

  /** handling the cloudinary upload */
  const imageUploadHandler = () => {
    if (widget === undefined) {
      widget = new CloudinaryWidget(
        cloudinaryUpdate, error => (error), false
      );
    }
    widget.open();
  };

  const defaultProps = {
    center: {
      lat: 6.500000,
      lng: 3.350000
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

  const handleSubmit = async () => {
    await props.reportIncident(formData, props).then(res => {
      const errors = res;
      if (errors) {
        Object.values(errors).forEach(message => props.failureToast(message));
      }
    });
  };

  return (
    <Aux>
      <div className={Classes.PacCard}>
        <ToastContainer autoClose={5000} />
        <div>
          <div className={Classes.PacTitle}>
            iReporter form
        </div>
        </div>
        <textarea
          name="comment"
          className={Classes.UserComment}
          placeholder="What's happening in your area?" cols="30" rows="5"
          onChange={(event) => updateCommentInput(event)}
        />
        <div className={Classes.PacContainer}>
          <PlacesAutocomplete
            value={location}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
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

        <select className={Classes.SelectDrop} onChange={(event) => updateCommentInput(event)} name="incidentType">
          <option value="red-flags">Red-flag</option>
          <option value="interventions">Intervention</option>
        </select>

        <div className={Classes.PacFile}>
          <button className={Classes.PacInput} type="button" onClick={imageUploadHandler}>
            <div className={Classes.CameraIcon} />
          </button>
        </div>
        <button
          className={Classes.ReportBtn}
          onClick={() => handleSubmit()}>
          {
            isLoading
            ?
              <div className="reset_spinner_box">
                <ClipLoader
                  size={30}
                  color="white"
                />
              </div>
            : 'iReport'
          }
          </button>

        <div className="geo-display" id="geo-dis" />
      </div>
      <div style={{ height: '100vh', width: '100%' }}>
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
    </Aux>
  );
};

const mapStateToProps = state => (
  {
    isLoading: state.reportReducer.loading,
  }
);

export default connect(mapStateToProps, { failureToast, reportIncident })(Report);
