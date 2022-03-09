import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "./PaperInformation";

const Description = (props) => {
  const { userState } =  props
  const {
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = userState;

  return (
    <Fragment>
      <Stack sx={{justifyContent: 'center'}}>
        {bio !==null
        ?<Typography>{bio}</Typography>
        :<Typography>Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</Typography>}
      </Stack>
      <PaperInformation userState={userState} />
    </Fragment>
  )

};

export default Description;