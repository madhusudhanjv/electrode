import {actions} from '../actions'

const rovers = (store, action) => {
  switch (action.type) {
    case actions.GET_PHOTOS:
      return {
        ...store,
        photos: action.value,
        error: '',
        loading: false,
      };
    case actions.GET_PHOTOS_START:
      return {
        ...store,
        photos: [],
        error: '',
        loading: true,
      };
    case actions.GET_PHOTOS_ERROR:
      return {
        ...store,
        error: action.value,
        loading: false,
      };
  }
  return store || { photos: [] };
};

export default rovers;