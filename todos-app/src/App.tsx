import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

//   return(
// <React.Fragment>
//   <div className="contaner mt-3">
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <p className="h3 fw-bold text-success">App Component</p>
//           <button className="btn btn-success">Read More</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </React.Fragment>
//   );
}

export default App;
