import { useEffect, useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import PageLayout from '../../../components/PageLayout';
import AppAutocomplete from '../../../components/Autocomplete';

import { fetchRestaurants } from '../../../services/restaurant.service';

const Home = () => {
  const [options, setOptions] = useState([]);

  const loadRestaurants = async () => {
    const restaurants = await fetchRestaurants();

    setOptions(restaurants.records.map((restaurant) => restaurant.fields.Name));
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <PageLayout pageName="Home Page">
      <Stack>
        <Box sx={{ display: 'flex' }}>
          <AppAutocomplete
            label="Search restaurants"
            options={options}
            sx={{ width: 'calc(100% - 180px)', mr: '30px' }}
          />
          <Button variant="contained" sx={{ width: '150px' }}>
            Add
          </Button>
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default Home;
