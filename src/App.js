import "./App.css";
import Detailform from "./components/Detailform";
import Login from "./components/Login";
import React from 'react';
import UserInformation from "./components/UserInformation"

function App() {

  const [isLoggedIn, setLoggedIn] = React.useState(false)

  return (
    <div>
      <h1>Welcome to DBS Seed</h1>
      <UserInformation/>
      {!isLoggedIn ? 
      <Login 
        checkLogin={setLoggedIn}
        isLoggedIn = {isLoggedIn}
      /> : <Detailform />}
    </div>
  );
}

export default App;