import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AppAutocomplete = ({ label, options, sx, onChange }) => {
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={options}
      getOptionLabel={(option) => option.fields.Name}
      sx={sx}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};

export default AppAutocomplete;
