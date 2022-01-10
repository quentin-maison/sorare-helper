import React from 'react'

//ALERT
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// eslint-disable-next-line
export function ServerStatus (props: any) {

    return (
        <Stack sx={{ width: '60%', marginTop: '40px', marginRight: 'auto', marginLeft: 'auto' }} spacing={2}>
          <Alert variant="filled" severity="error">
              Server is not responding, please try again later
          </Alert>
        </Stack>
    );
}