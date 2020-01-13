import {NASA_ROVERS_API_KEY} from '../constants'

const getPhotos = function({camera, sol, perspective = 'Curiosity', page = 0}) {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${perspective}/photos?sol=${sol}&camera=${camera}&api_key=${NASA_ROVERS_API_KEY}`)
    .then(response => response.json())
}

export {
  getPhotos
}