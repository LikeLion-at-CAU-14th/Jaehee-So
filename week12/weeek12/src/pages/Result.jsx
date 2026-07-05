import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userAnswers = location.state?.answers || [];


  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

 
    const calculateResult = async () => {
      try {
       
        const answerResponse = await axios.post(
          "https://week12-api-rcwo.onrender.com/api/answers",
          { answers: userAnswers } // 사용자가 고른 5개 정답 전달
        );

        // 맞은 개수 세기
        const correctCount = answerResponse.data.results.filter(r => r.correct === true).length;
        setScore(correctCount);

  
        const messageResponse = await axios.get(
          `https://week12-api-rcwo.onrender.com/api/result?score=${correctCount}`
        );
        setResultMessage(messageResponse.data.message);
        
        setLoading(false); 
      } catch (error) {
        console.error("결과를 처리하는 중 에러가 발생했습니다.", error);
        setLoading(false);
      }
    };

    calculateResult();
  }, [userAnswers, navigate]);

  if (loading) {
    return <Loading>채점 중... </Loading>;
  }

  return (
    <ResultContainer>
      <Title>🎉 퀴즈 종료! 🎉</Title>
      
      <ScoreCircle>
        <ScoreNum>{score}</ScoreNum> / 5
      </ScoreCircle>

      <Message>{resultMessage}</Message>

      <HomeButton onClick={() => navigate('/')}>메인으로 돌아가기</HomeButton>
    </ResultContainer>
  );
};

export default Result;


const ResultContainer = styled.div`
  max-width: 500px;
  margin: 80px auto;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const ScoreCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f1f8ff;
  border: 3px solid #b8edfb;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #555;
  font-weight: bold;
`;

const ScoreNum = styled.span`
  font-size: 48px;
  color: #03a9f4;
  margin-right: 5px;
`;

const Message = styled.p`
  font-size: 20px;
  color: #555;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 1.4;
`;

const HomeButton = styled.button`
  display: inline-block;
  width: 250px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #9cdbf0;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 100px;
`;