import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from '../Loader';
import PhotoDetails from '../PhotoDetails';
import PhotoGallery from '../PhotoGallery';
import RoversFrom from './RoversForm';
import { fetchPhotos } from "../../actions";

import "../../styles/raleway.css";
import styles from "./styles.css"; 
import { withStyles } from "@material-ui/core";

class Rovers extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePhotoSelection = this.togglePhotoSelection.bind(this);
  }

  state = {
    selectedPhoto: null,
    firstLoad: true,
  }

  handleSubmit = (values) => {
    this.setState({firstLoad: false});
    this.props.fetchPhotos(values);
    this.setState({ selectedPhoto: null })
  }

  togglePhotoSelection(photo) {
    const {selectedPhoto} = this.state;
    if (!selectedPhoto || selectedPhoto.id !== photo.id) {
      this.setState({ selectedPhoto: photo })
    } else {
      this.setState({ selectedPhoto: null })
    }
  }
  
  render() {
    const { photos = [], loading, error } = this.props;
    const { selectedPhoto, firstLoad } = this.state;

    const showNoPhotosMessage = !firstLoad && photos.length === 0 && !loading;

    return (
      <div>
        <header>
          <div styleName="styles.header">
            <h1>
              Mars Rovers Photos
            </h1>
            <RoversFrom onSubmit={this.handleSubmit} />
          </div>
        </header>

        {photos.length > 0 && (
          <main>
            <div styleName="styles.photo-gallery-container">
              <div styleName="styles.photo-gallery">
                <PhotoGallery photos={photos} toggleSelection={this.togglePhotoSelection} />
              </div>
              {
                selectedPhoto && (
                  <div styleName="styles.photo-details">
                    <PhotoDetails photo={selectedPhoto} toggleSelection={this.togglePhotoSelection} />
                  </div>)
              }
            </div>
          </main>
        )}

        {
          showNoPhotosMessage && (
            <div styleName="styles.message">
              No Photos
            </div>
          )
        }

        {loading && (<Loader />)}

        {error && (
          <div styleName="styles.error-message">
            {`Error: Loading Photos. "${error}"`}
          </div>
        )}
      </div>
    );
  }
}

Rovers.propTypes = {
  photos: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  firstLoad: PropTypes.bool,
};

const mapStateToProps = ({rovers}) => {
  return {
    photos: rovers.photos || [],
    loading: rovers.loading,
    error: rovers.error,
  };
};

const mapDispatchToProps = { fetchPhotos };

const RoverWithStyles = withStyles((theme) => ({
  icon: {
    fontSize: 32,
  },
}))(Rovers)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoverWithStyles);
