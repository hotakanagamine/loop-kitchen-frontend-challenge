import { useEffect, useState, useMemo } from 'react';
import { Box, Stack, List } from '@mui/material';
import Cookies from 'universal-cookie';
import PageLayout from '../../../components/PageLayout';
import Restaurant from '../../../components/Restaurant';

const Home = () => {
  const cookies = new Cookies();
  const [added, setAdded] = useState(cookies.get('restaurants') ?? []);
  const bookmarks = useMemo(() => {
    return added.filter((item) => item.isBookmarked);
  }, [added]);

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
    cookies.set('restaurants', added);
  }, [added]);

  return (
    <PageLayout pageName="Home Page">
      <Stack sx={{ height: '100%' }}>
        <Box sx={{ height: '100%', overflow: 'auto', mt: 2 }}>
          <List>
            {bookmarks.map((item) => (
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
