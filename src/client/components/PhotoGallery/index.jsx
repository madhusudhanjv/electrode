import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

class PhotoGallery extends React.Component {
   render() {
    const { photos = [], toggleSelection } = this.props;

    return (
      <ul styleName="styles.photos-container">
        {
          photos.map((photo, index) => {
            return (
              <li styleName="styles.photo" key={index}>
                <button onClick={() => toggleSelection(photo)}>
                  <div styleName="styles.image-container" >
                    <img src={photo.img_src} />
                    <span styleName="styles.image-subtext" >{photo.earth_date}</span>
                  </div>
                </button>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

PhotoGallery.propTypes = {
  photos: PropTypes.array,
  toggleSelection: PropTypes.func,
};

export default PhotoGallery;
