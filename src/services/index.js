import { MESSAGES } from '../utils/constants';

const fetchWithErrorHandler = async (URL) => {
  const response = await fetch(URL);
  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERRORS[401]);
      case 403:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERRORS[403]);
      case 404:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERRORS[404]);
      case 500:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERRORS[500]);
      case 503:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERRORS[503]);
      default:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERRORS.UNKNOWN);
    }
  }

  return response;
};

export default fetchWithErrorHandler;
