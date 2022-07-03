import fetchWithErrorHandler from '.';

export const fetchRestaurants = async () => {
  const token = process.env.REACT_APP_API_TOKEN ?? '';
  const url = process.env.REACT_APP_API_URL_RESTAURANTS ?? '';
  const response = await fetchWithErrorHandler(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
