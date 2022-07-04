import { Typography, Link } from '@mui/material';
import { COMPANY } from '../../utils/constants';

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href={COMPANY.URL}>
      {COMPANY.NAME}
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
