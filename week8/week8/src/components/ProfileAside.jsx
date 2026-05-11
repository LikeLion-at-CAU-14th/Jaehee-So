import React from 'react'
import styled from 'styled-components'


const ProfileAside = () => {
  return (
   <AsideWrapper>
    <ImageBox>
        <img src="/image.jpg" alt="내 사진" />
      </ImageBox>
      <IconNav>
        <a href="https://www.instagram.com/jaeheeee_?igsh=dG1teHVlMDR5NmZ4&utm_source=qr">
          <img src="/instagram.png" alt="인스타" width="40px" />
        </a>
        <a href="mailto:sjhee0521@cau.ac.kr">
          <img src="/mail.png" alt="메일" width="40px" />
        </a>
        <a href="https://github.com/LikeLion-at-CAU-14th/Jaehee-So.git">
          <img src="/github.png" alt="github" width="40px" />
        </a>
      </IconNav>
      <InfoList>
        <li><strong>이름 : 소재희</strong></li>
        <li><strong>생일 : 2005.05.21</strong></li>
        <li><strong>학교 : 중앙대학교</strong></li>
        <li><strong>학부 : 소프트웨어학부</strong></li>
      </InfoList>
   </AsideWrapper>
  );
};
export default ProfileAside;

const AsideWrapper = styled.aside`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  border-right: 5px solid #8d6e63;
`

const ImageBox = styled.div`
  img {
    width: 220px;
    border-radius: 10px;
    margin-top: 15px;
    opacity: 0.9;
  }
`

const IconNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
`

const InfoList = styled.ul`
  margin: 10px;
  padding: 0;
  list-style: none;

  li {
    line-height: 1.5;
    font-size: 30px;
    text-align: left;
    color: #333333;
  }
`