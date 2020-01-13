export const NASA_ROVERS_API_KEY = 'XqDgWTwaszZjH6fWBIl7YOH9a6mff0OayVJZNUsk';

const PERSPECTIVE_ENUM = {
  CURIOSITY: 'curiosity',
  OPPORTUNITY: 'opportunity',
  SPIRIT: 'spirit',
}

export const CAMERAS = {
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

export const PERSPECTIVE = {
  FHAZ: [
    PERSPECTIVE_ENUM.CURIOSITY,
    PERSPECTIVE_ENUM.OPPORTUNITY,
    PERSPECTIVE_ENUM.SPIRIT,
  ],
  RHAZ: [
    PERSPECTIVE_ENUM.CURIOSITY,
    PERSPECTIVE_ENUM.OPPORTUNITY,
    PERSPECTIVE_ENUM.SPIRIT,
  ],
  MAST: [
    PERSPECTIVE_ENUM.CURIOSITY,
  ],
  CHEMCAM: [
    PERSPECTIVE_ENUM.CURIOSITY,
  ],
  MAHLI: [
    PERSPECTIVE_ENUM.CURIOSITY,
  ],
  MARDI: [
    PERSPECTIVE_ENUM.CURIOSITY,
  ],
  NAVCAM: [
    PERSPECTIVE_ENUM.CURIOSITY,
    PERSPECTIVE_ENUM.OPPORTUNITY,
    PERSPECTIVE_ENUM.SPIRIT,
  ],
  PANCAM: [
    PERSPECTIVE_ENUM.OPPORTUNITY,
    PERSPECTIVE_ENUM.SPIRIT,
  ],
  MINITES: [
    PERSPECTIVE_ENUM.OPPORTUNITY,
    PERSPECTIVE_ENUM.SPIRIT,
  ],
}