
import React from 'react';
import './App.css';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
  return (
    <div className="container">
      <h1 className="p-3"><strong> Online Courses for you. If you......</strong></h1>
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;