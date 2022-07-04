import { useState } from 'react';
import { Box, Button, ListItem, Paper, Skeleton } from '@mui/material';

const Restaurant = ({ restaurant, onBookmark, onRemove }) => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoaded = () => {
    setLoading(false);
  };

  return (
    <ListItem>
      <Box sx={{ width: '100%', padding: '16px' }} component={Paper}>
        {loading ? (
          <Skeleton
            sx={{ height: '640px', marginBottom: '8px', borderRadius: '8px' }}
            variant="rectangular"
          />
        ) : null}
        <iframe
          title="Restaurant"
          src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${restaurant.fields.Name}"}`}
          frameBorder="0"
          allowFullScreen
          onLoad={handleIframeLoaded}
          style={{
            width: '100%',
            height: '640px',
            display: loading ? 'none' : 'block',
            marginBottom: '8px',
            border: '1px dotted gray',
            borderRadius: '8px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, .1)',
          }}
        />
        <Button
          variant="outlined"
          color={restaurant.isBookmarked ? 'error' : 'success'}
          sx={{ mr: 3 }}
          onClick={onBookmark}
        >
          {restaurant.isBookmarked ? 'Unlike' : 'Bookmark'}
        </Button>
        <Button variant="contained" color="error" onClick={onRemove}>
          Remove
        </Button>
      </Box>
    </ListItem>
  );
};

export default Restaurant;
