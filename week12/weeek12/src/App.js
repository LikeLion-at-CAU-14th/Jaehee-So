import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import BookList from './pages/BookList';
import Home from './pages/Home';
import styled from 'styled-components';
import BookDetail from './pages/BookDetatil';
import QuizPage from './pages/QuizPage';
import Result from './pages/Result';

const App = () => {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} >
          <Route path=":id" element={<BookDetail />} />
        </Route>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>

    </AppDom>
  )
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;