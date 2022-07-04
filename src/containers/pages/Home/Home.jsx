import { useEffect, useState } from 'react';
import { Box, Stack, Button, List } from '@mui/material';
import Cookies from 'universal-cookie';
import PageLayout from '../../layout';
import AppAutocomplete from '../../../components/Autocomplete';
import Restaurant from '../../../components/Restaurant';

import { fetchRestaurants } from '../../../services/restaurant.service';

const Home = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [options, setOptions] = useState([]);
  const cookies = new Cookies();
  const [added, setAdded] = useState(cookies.get('restaurants') ?? []);

  const loadRestaurants = async () => {
    const restaurants = await fetchRestaurants();

    setOptions(restaurants.records);
  };

  const onChange = (e, value) => {
    setRestaurant(value);
  };

  const onAdd = () => {
    setAdded([...added, restaurant]);
  };

  const onBookmark = (item) => {
    setAdded(
      added.map((rest) =>
        rest.id === item.id
          ? { ...rest, isBookmarked: !rest.isBookmarked }
          : rest
      )
    );
  };

  const onRemove = (item) => {
    setAdded(added.filter((rest) => rest.id !== item.id));
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  useEffect(() => {
    cookies.set('restaurants', added);
  }, [added]);

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
            {added
              .filter((item) => !item.isBookmarked)
              .map((item) => (
                <Restaurant
                  key={item.id}
                  restaurant={item}
                  onBookmark={() => onBookmark(item)}
                  onRemove={() => onRemove(item)}
                />
              ))}
          </List>
        </Box>
      </Stack>
    </PageLayout>
  );
};

export default Home;
