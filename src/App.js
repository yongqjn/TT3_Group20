import "./App.css";
import Detailform from "./components/Detailform";
import Login from "./components/Login";
import React from 'react';

function App() {

  const [isLoggedIn, setLoggedIn] = React.useState(false)

  return (
    <div>
      <h1>Welcome to DBS Seed</h1>
      {!isLoggedIn ? 
      <Login 
        checkLogin={setLoggedIn}
        isLoggedIn = {isLoggedIn}
      /> : <Detailform />}
    </div>
  );
}

export default App;