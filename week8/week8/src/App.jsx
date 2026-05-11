import React from 'react'
import Header from './components/Header'
import ProfileAside from './components/ProfileAside'
import ContentSection from './components/ContentSection'
import styled from 'styled-components'

const App = () => {
  return (
  <Container>
    <Header/>
    <Main>
      <ProfileAside/>
      <ContentSection/>
    </Main>
  </Container>
  )
}

export default App

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center; 
  min-height: 100vh;
  padding: 20px;
`

const Main = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.8); 
  border-radius: 20px; 
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1200px;
`
