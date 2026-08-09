import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate(); 
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

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
    return <div className="text-center text-[20px] mt-[100px]">로딩 중</div>;
  }

  const currentQuiz = questions[currentIdx];

  const handleAnswerClick = (selectedAnswer) => {
    const newAnswer = { id: currentQuiz.id, answer: selectedAnswer };
    const updatedAnswers = [...userAnswers, newAnswer];
    setUserAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      navigate('/result', { state: { answers: updatedAnswers } });
    }
  };

  return (
    <div className="max-w-[600px] my-[60px] mx-auto p-[30px] bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-center">
      <div className="text-[14px] text-[#888] mb-[10px]">문제 {currentIdx + 1} / {questions.length}</div>
      <h2 className="text-[22px] text-[#333] mb-[30px]">{currentQuiz.question}</h2>
      
      <div className="flex flex-col gap-[12px]">
        {currentQuiz.answers.map((answer, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswerClick(answer)}
            className="p-[15px] text-[16px] bg-[#5c6d7e] border border-[#ddd] rounded-[8px] cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#e3f2fd] hover:border-[#2196f3]"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;