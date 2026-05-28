import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <h1>W E L C O M E - !</h1>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  color: #556b2f;
  font-size: 25px; 
  font-weight: bold;
  padding-top: 15px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;

`;