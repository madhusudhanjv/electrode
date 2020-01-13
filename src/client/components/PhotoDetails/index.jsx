import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form'

import LaunchIcon from '@material-ui/icons/Launch';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from "./styles.css";

class PhotoDetails extends React.Component {
   render() {
    const { photo = {}, toggleSelection } = this.props;

    return (
      <div styleName="styles.photo-details-container">
        <div styleName="styles.close-icon">
          <CancelIcon onClick={() => toggleSelection(photo)} />
        </div>
        <div styleName="styles.launch-icon">
          <a href={photo.img_src} target="_blank" >
            <LaunchIcon />
          </a>
        </div>
        <div>
          <img src={photo.img_src} />
        </div>
        <div styleName="styles.details">
          <div>Camera: {photo.camera.full_name} ({photo.camera.name})</div>
          <div>Rover: {photo.rover.name}</div>
          <div>Date: {photo.earth_date}</div>
          <div>SOL: {photo.sol}</div>
        </div>
      </div>
    );
  }
}

PhotoDetails.propTypes = {
  photos: PropTypes.array,
};

export default PhotoDetails;
