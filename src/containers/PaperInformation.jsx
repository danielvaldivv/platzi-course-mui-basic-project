import React from "react";
import { Paper, Stack, Typography } from "@mui/material";


const PaperInformation = (props) => {
  const { userState } = props;
  const {
    public_repos,
    followers,
    following
  } = userState;

  return(
    <Paper elevation={2} >
    <Stack spacing={3} direction='row' sx={{justifyContent:'space-evenly', margin: '20px'}}>
      <Stack>
        <Typography>Repos</Typography>
        <Typography>{public_repos}</Typography>
      </Stack>
      <Stack>
        <Typography>Followers</Typography>
        <Typography>{followers}</Typography>
      </Stack>
      <Stack>
        <Typography>Following</Typography>
        <Typography>{following}</Typography>
      </Stack>
    </Stack>
</Paper>
  )
};

export default PaperInformation;