import fetchWithErrorHandler from '.';

export const fetchCredentials = async () => {
  const token = process.env.REACT_APP_API_TOKEN_CREDENTIALS ?? '';
  const url = process.env.REACT_APP_API_URL_CREDENTIALS ?? '';
  const response = await fetchWithErrorHandler(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
