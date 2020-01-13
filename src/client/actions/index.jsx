import {getPhotos} from '../data_providers/rovers'

export const actions = {
  GET_PHOTOS_START: 'rovers/GET_PHOTOS_START',
  GET_PHOTOS: 'rovers/GET_PHOTOS',
  GET_PHOTOS_ERROR: 'rovers/GET_PHOTOS_ERROR',
}
export function fetchPhotos(formValues) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_PHOTOS_START,
    })
    getPhotos(formValues).then(data => {
        return dispatch({
          type: actions.GET_PHOTOS,
          value: data.photos || [],
        })
      }).catch(error => {
        return dispatch({
          type: actions.GET_PHOTOS_ERROR,
          value: error || 'ERROR: Getting Photos',
        })
      })
  }
};