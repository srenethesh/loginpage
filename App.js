import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='logo'>
      <img src='https://www.codebuilders.in/img/code-builders-logo.svg' height='150' width='150' alt='Codebuilders'></img>
      <h2 id='title'>Please sign in</h2>
    </div>
    <div>
    <form  action='POST'>
      <input className='input' type='email'  placeholder='Email address'></input><br></br>
      <input className='input' type='password'  placeholder='Password'></input><br></br>
      <label  className='checkbox'><input type='checkbox'/>Remember Me</label><br></br>
      <button className='button'>Sign in</button>
    </form>
    </div>
    <div>
    </div>
    <footer className='footer'>&copy; VPS CodeBuilders Private Limited <br></br>2017-2023</footer>
    </div>
  );
}

export default App;
