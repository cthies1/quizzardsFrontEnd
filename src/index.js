import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import {
  CreateGroup,
  CreateQuiz,
  GroupPage,
  Groups,
  Home,
  Messages,
  Profile,
  QuizPage,
  Quizzes,
} from "./pages";

ReactDOM.render(
  <Router>
        
    <Navigation />
        
    <Routes>
            
      <Route path="/" element={<Home />} />
            
      <Route path="/createGroup" element={<CreateGroup />} />
            
      <Route path="/createQuiz" element={<CreateQuiz />} />
            
      <Route path="/groups" element={<Groups />} />
            
      <Route path="/messages" element={<Messages />} />
            
      <Route path="/profile" element={<Profile />} />
            
      <Route path="/groupPage" element={<GroupPage />} />
            
      <Route path="/quizPage" element={<QuizPage />} />
            
      <Route path="/quizzes" element={<Quizzes />} />
          
    </Routes>
      
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
