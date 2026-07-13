import { BrowserRouter } from "react-router-dom";
import MyPage from "./pages/Mypage";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute"; 
import "./App.css";

function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/signup" element={<Signup />} />;
          <Route 
          path="/mypage" 
          element={
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
          } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;