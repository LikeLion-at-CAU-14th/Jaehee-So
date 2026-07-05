import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate(); 
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // 고른 정답들을 저장
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("https://week12-api-rcwo.onrender.com/api/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error("퀴즈 문제를 가져오는데 실패했습니다.", error);
      }
    };
    fetchQuestions();
  }, []);

  if (questions.length === 0) {
    return <Loading>로딩 중</Loading>;
  }

  const currentQuiz = questions[currentIdx];

  
  const handleAnswerClick = (selectedAnswer) => {
    // 현재 문제의 id와 사용자가 클릭한 텍스트를 객체로 
    const newAnswer = { id: currentQuiz.id, answer: selectedAnswer };
    
    // 기존에 모아둔 답안들 뒤에  방금  답을 추가
    const updatedAnswers = [...userAnswers, newAnswer];
    setUserAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      // 아직 풀 문제가 남았다면? 다음 인덱스로 넘기기 (0 -> 1 -> 2...)
      setCurrentIdx(currentIdx + 1);
    } else {
      navigate('/result', { state: { answers: updatedAnswers } });
    }
  };

  return (
    <QuizContainer>
      <Progress>문제 {currentIdx + 1} / {questions.length}</Progress>
      <Question>{currentQuiz.question}</Question>
      
      <AnswerGroup>
        {currentQuiz.answers.map((answer, index) => (
          <AnswerButton key={index} onClick={() => handleAnswerClick(answer)}>
            {answer}
          </AnswerButton>
        ))}
      </AnswerGroup>
    </QuizContainer>
  );
};

export default QuizPage;

const QuizContainer = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const Progress = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const Question = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 30px;
`;

const AnswerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AnswerButton = styled.button`
  padding: 15px;
  font-size: 16px;
  background-color: #5c6d7e;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e3f2fd;
    border-color: #2196f3;
  }
`;
const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 100px;
`;

