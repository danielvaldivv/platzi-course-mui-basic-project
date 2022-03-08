import { CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const UserCard = (props) => {
  const { userState} = props;
  const {
    avatar_url,
    name,
    login,
    created_at,
  } = userState;

  return(
    <Grid
      container
      spacing={2}
      sx={{marginTop: '15px'}}
    >
      <Grid item xs={3}>
        <CardMedia
          component="img"
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '15px'
          }}
        />
      </Grid>
      <Grid item xs={9}>
          <Stack
            direction="column"
            spacing={3}
            sx={{margin: '30px'}}
          >
            <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
              <Typography>
                {name}
              </Typography>
              <Typography>
                {created_at}
              </Typography>
            </Stack>
            <Typography>{`@${login}`}</Typography>
          </Stack>
      </Grid>
    </Grid>
  )
};

export default UserCard; 