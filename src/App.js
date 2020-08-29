// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
   

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