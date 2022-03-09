import React from 'react';
import { CardMedia, Grid, Stack, Typography } from '@mui/material';
import Description from './Description';

const UserCard = (props) => {
  const { userState } = props;
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
            spacing={1}
            sx={{margin: '30px'}}
          >
            <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
              <Typography variant="h4">
                {name}
              </Typography>
              <Typography variant="subtitle2">
                {created_at}
              </Typography>
            </Stack>
            <Typography variant="caption">{`@${login}`}</Typography>
            <Description userState={userState} />
          </Stack>
      </Grid>
    </Grid>
  )
};

export default UserCard; 