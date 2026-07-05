// src/pages/Mypage.jsx
import React from 'react';
import { Card, Wrapper, Title } from '../components/layout/common'; 
import { useUserInfo } from '../context/UserInfoContext'; 
import styled from 'styled-components';

const MyPage = () => {

  const { state } = useUserInfo();

  return (
    <Wrapper>
      <Card>
        <Title>마이페이지 (회원 정보)</Title>
        
        {state.name ? (
          <InfoList>
            <p><strong>이름:</strong> {state.name}</p>
            <p><strong>이메일:</strong> {state.email}</p>
            <p><strong>생년월일:</strong> {state.birth}</p>
            <p><strong>성별:</strong> {state.gender}</p>
          </InfoList>
        ) : (
          <p style={{ color: '#a1a1aa', fontSize: '14px', marginTop: '8px' }}>
            등록된 회원 정보가 없습니다. 홈에서 정보를 먼저 입력해 주세요.
          </p>
        )}
      </Card>
    </Wrapper>
  );
};

export default MyPage;



const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  color: #3f3f46;
  margin-top: 12px;
  
  strong {
    color: #18181b;
    margin-right: 6px;
  }
`;