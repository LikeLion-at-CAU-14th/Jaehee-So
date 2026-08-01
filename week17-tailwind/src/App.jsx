import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BookList from './pages/BookList';
import Home from './pages/Home';
import BookDetail from './pages/BookDetatil';
import QuizPage from './pages/QuizPage';
import Result from './pages/Result';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full min-h-[95vh] flex-col justify-center items-center gap-[30px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />}>
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;