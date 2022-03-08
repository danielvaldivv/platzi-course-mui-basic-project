import React, { useState } from "react";
import { TextField , IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
  const { inputUser, setInputUser, notFound } = props

  const [userState, setUserState] = useState('')

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setUserState(inputValue);
  }

  const handleSubmit = () => {
    setInputUser(userState);
  }

  return(
    <Stack
      direction="row"
      sx={{ marginTop: '30px', width: '80%' }}
    >
      <TextField 
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        placeholder="octocat"
        size="small"
        value={userState}
        onChange={onSearchValueChange}
        sx={{
          
          width: '100%'
        }}
      />
      <IconButton
        aria-label="search"
        size="medium"
        sx={{left: -40}}
        onClick={handleSubmit}
      >
        <SearchIcon/>
      </IconButton >
    </Stack>
  )
};

export default Searcher; 