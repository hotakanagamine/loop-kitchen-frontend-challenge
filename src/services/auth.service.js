import fetchWithErrorHandler from '.';

export const fetchCredentials = async () => {
  const response = await fetchWithErrorHandler(
    process.env.REACT_APP_API_URL_CREDENTIALS ?? ''
  );
  const data = await response.json();
  const credentials = data.results;
  return credentials;
};
