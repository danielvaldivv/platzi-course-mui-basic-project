import React, { useState } from "react";
import { TextField , IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
  const [name, setname] = useState('')

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setname(inputValue);
  }

  const handleSubmit = () => {
    console.log(name)
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
        value={name}
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