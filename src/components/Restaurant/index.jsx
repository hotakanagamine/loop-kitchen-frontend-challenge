import { Box, Button, ListItem } from '@mui/material';

const Restaurant = ({ restaurant, onBookmark, onRemove }) => {
  return (
    <ListItem>
      <Box sx={{ width: '100%' }}>
        <iframe
          title="Restaurant"
          src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${restaurant.fields.Name}"}`}
          frameBorder="0"
          allowFullScreen
          style={{ width: '100%', height: '600px' }}
        />
        <Button
          variant="outlined"
          color={restaurant.isBookmarked ? 'error' : 'success'}
          sx={{ mr: 3 }}
          onClick={onBookmark}
        >
          {restaurant.isBookmarked ? 'Unbookmark' : 'Bookmark'}
        </Button>
        <Button variant="contained" color="error" onClick={onRemove}>
          Remove
        </Button>
      </Box>
    </ListItem>
  );
};

export default Restaurant;
