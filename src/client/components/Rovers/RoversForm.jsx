import React from "react";
import { Field, reduxForm, formValues } from 'redux-form'

import { Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select as SelectBox, TextField } from '@material-ui/core';

import custom from "./styles.css";

const validate = values => {
  const errors = {}
  const requiredFields = [
    'camera',
    'sol',
    'perspective',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.sol &&
    !/[0-9]+$/.test(values.sol)
  ) {
    errors.sol = 'Enter a number'
  }
  return errors
}

const CAMERAS = {
  FHAZ: 'Front Hazard Avoidance Camera',
  RHAZ: 'Rear Hazard Avoidance Camera',
  MAST: 'Mast Camera',
  CHEMCAM: 'Chemistry and Camera Complex',
  MAHLI: 'Mars Hand Lens Imager',
  MARDI: 'Mars Descent Imager',
  NAVCAM: 'Navigation Camera',
  PANCAM: 'Panoramic Camera',
  MINITES: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
}

const PERSPECTIVE_ENUM = {
  CURIOSITY: 'Curiosity',
  OPPORTUNITY: 'Opportunity',
  SPIRIT: 'Spirit',
}

const PERSPECTIVE = [
  PERSPECTIVE_ENUM.CURIOSITY,
  PERSPECTIVE_ENUM.OPPORTUNITY,
  PERSPECTIVE_ENUM.SPIRIT,
]

// const PERSPECTIVE = {
//   FHAZ: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//     PERSPECTIVE_ENUM.OPPORTUNITY,
//     PERSPECTIVE_ENUM.SPIRIT,
//   ],
//   RHAZ: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//     PERSPECTIVE_ENUM.OPPORTUNITY,
//     PERSPECTIVE_ENUM.SPIRIT,
//   ],
//   MAST: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//   ],
//   CHEMCAM: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//   ],
//   MAHLI: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//   ],
//   MARDI: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//   ],
//   NAVCAM: [
//     PERSPECTIVE_ENUM.CURIOSITY,
//     PERSPECTIVE_ENUM.OPPORTUNITY,
//     PERSPECTIVE_ENUM.SPIRIT,
//   ],
//   PANCAM: [
//     PERSPECTIVE_ENUM.OPPORTUNITY,
//     PERSPECTIVE_ENUM.SPIRIT,
//   ],
//   MINITES: [
//     PERSPECTIVE_ENUM.OPPORTUNITY,
//     PERSPECTIVE_ENUM.SPIRIT,
//   ],
// }

class RoversForm extends React.Component {
  state = {
    camera: null,
    perspective: null,
    sol: null,
  }

  renderCameraList({input, meta: { touched, error }}) {
    const cameras = Object.keys(CAMERAS).sort();

    return (
      <FormControl required>
        <InputLabel id="select-camera">Camera</InputLabel>
        <SelectBox
          {...input}
          id="camera"
          labelId="select-camera"
          styleName="custom.input-camera">
          {
            cameras.map((camera, index) => {
              return (<MenuItem value={camera} key={index}>{CAMERAS[camera]}</MenuItem>)
            })
          }
        </SelectBox>
      </FormControl>
    )
  }

  renderPerspective({input, meta: { touched, error }}) {
    return (
      <FormControl required>
        <InputLabel id="select-perspective">Rover</InputLabel>
        <SelectBox
          {...input}
          id="perspective"
          labelId="select-perspective"
          styleName="custom.input-camera">
          {
            PERSPECTIVE.map((prespective, index) => {
              return (<MenuItem value={prespective} key={index}>{prespective}</MenuItem>)
            })
          }
        </SelectBox>
      </FormControl>
    )
  }

  renderSol({input, meta: { touched, error }}) {
    return (
      <div>
        <TextField 
          {...input}
          required
          type="number"
          label="Sol" />
      </div>
    )
  }

  handleFieldChange = (formField) => {
    this.setState({[formField.name]: formField.value});
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;

    const {camera, perspective, sol} = this.state;

    const enableButton = camera && perspective && sol;

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div styleName="custom.rover-form-fields-container">
            <div styleName="custom.input-container">
              <Field
                name="camera"
                component={this.renderCameraList}
                label="Camera"
                onChange={(event) => this.handleFieldChange(event.target)}
                />
            </div>
            <div styleName="custom.input-container">
              <Field
                name="perspective"
                component={this.renderPerspective}
                label="Perspective"
                onChange={(event) => this.handleFieldChange(event.target)}
                />
            </div>
            <div styleName="custom.input-container">
              <Field
                name="sol"
                component={this.renderSol}
                label="Sol"
                styleName="custom.input-sol"
                onChange={(event) => this.handleFieldChange(event.target)}
                />
            </div>
            <div styleName="custom.input-container">
              <Button 
                disabled={!enableButton}
                variant="contained"
                color="primary"
                type="submit">
                Get Photos
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

RoversForm.propTypes = {};

export default reduxForm({
  // a unique name for the form
  form: 'rover',
  validate,
})(RoversForm)
