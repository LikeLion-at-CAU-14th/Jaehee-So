import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
          { answers: userAnswers }
        );

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
    return <div className="text-center text-[20px] mt-[100px]">채점 중... </div>;
  }

  return (
    <div className="max-w-[500px] my-[80px] mx-auto p-[40px] bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center">
      <h1 className="text-[28px] text-[#333] mb-[20px]">🎉 퀴즈 종료! 🎉</h1>
      
      <div className="w-[150px] h-[150px] rounded-[50%] bg-[#f1f8ff] border-[3px] border-[#b8edfb] my-[30px] mx-auto flex items-center justify-center text-[24px] text-[#555] font-bold">
        <span className="text-[48px] text-[#03a9f4] mr-[5px]">{score}</span> / 5
      </div>

      <p className="text-[20px] text-[#555] font-[600] mb-[40px] leading-[1.4]">{resultMessage}</p>

      <button 
        onClick={() => navigate('/')}
        className="inline-block w-[250px] h-[60px] leading-[60px] text-[18px] text-[#4a4a4a] bg-[#b8edfb] border-none rounded-[12px] cursor-pointer font-bold shadow-[2px_2px_5px_rgba(0,0,0,0.1)] transition-[background-color] duration-200 ease-in-out hover:bg-[#9cdbf0]"
      >
        메인으로 돌아가기
      </button>
    </div>
  );
};

export default Result;