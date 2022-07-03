import { useEffect, useState, useMemo } from 'react';
import { Box, Stack, Button, List, ListItem } from '@mui/material';
import Cookies from 'universal-cookie';
import PageLayout from '../../../components/PageLayout';
import AppAutocomplete from '../../../components/Autocomplete';
import Restaurant from '../../../components/Restaurant';

import { fetchRestaurants } from '../../../services/restaurant.service';

const Home = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [options, setOptions] = useState([]);
  const cookies = new Cookies();

  const loadRestaurants = async () => {
    const restaurants = await fetchRestaurants();

    setOptions(restaurants.records);
  };

  const onChange = (e, value) => {
    setRestaurant(value);
  };

  const onAdd = () => {
    const added = cookies.get('restaurants') || [];
    cookies.set('restaurants', [...added, restaurant]);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <PageLayout pageName="Home Page">
      <Stack sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex' }}>
          <AppAutocomplete
            label="Search restaurants"
            options={options}
            sx={{ width: 'calc(100% - 180px)', mr: '30px' }}
            onChange={onChange}
          />
          <Button variant="contained" sx={{ width: '150px' }} onClick={onAdd}>
            Add
          </Button>
        </Box>
        <Box sx={{ height: 'calc(100% - 72px)', overflow: 'auto', mt: 2 }}>
          <List>
            {(cookies.get('restaurants') || []).map((item, index) => (
              <Restaurant key={item.id} />
            ))}
          </List>
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default Home;
