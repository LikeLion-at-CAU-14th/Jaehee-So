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
  width: 100%;
  min-height: 100vh;
  padding: 0; 
`

const Main = styled.div`
  display: flex;
  width: 95%; 
  max-width: 1400px; 
  justify-content: space-between;
  align-items: stretch;
  border-top: 5px solid #8d6e63;
  min-height: 80vh;
  padding: 0;
  margin-top: 10px; /* 헤더와의 간격 미세 조정 */
`;