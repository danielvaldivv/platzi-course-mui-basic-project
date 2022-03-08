import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher';
import UserCard from './containers/UserCard';

import { getGitHubUsers } from'./services/getUsers'


const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);
  
  const gettingUsers = async (user) =>{
    const userResponse = await getGitHubUsers(user);

    if (userState==='octocat'){
      localStorage.setItem('octocat', userState);
    };

    if(userResponse.message==='Not Found') {
      const { octocat } = localStorage;
      setInputUser(octocat)
      setNotFound(true)
    } else {
      setUserState(userResponse);
    };

    if(userResponse.message !== 'Not Found' && inputUser !== 'octocat'){
      setNotFound(false)
    };
  };

  useEffect(() => {
    gettingUsers(inputUser);
    },
    [inputUser],
  );

  return (
    <Container
      sx={{
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        ContainerShadow: '0px 0px 10px grey',
        margin: '0 auto',
        marginTop: '50px',
        backgroundColor: 'whitesmoke',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher  notFound={notFound} inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  )
}

export default App;