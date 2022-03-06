import React from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher';

const App = () => {
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
      <Searcher />
    </Container>
  )
}

export default App;