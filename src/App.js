import "./App.css";
import Detailform from "./components/Detailform";
import Login from "./components/Login";
import React, {useState} from 'react';
import UserInformation from "./components/UserInformation"

function App() {
  const [accountKey, setaccountKey] = useState();
  const [isLoggedIn, setLoggedIn] = React.useState(false)

  return (
    <div>
      <h1>Welcome to DBS Seed</h1>
      {!isLoggedIn ? 
      <Login 
        checkLogin={setLoggedIn}
        isLoggedIn = {isLoggedIn}
      /> : <UserInformation setaccountKey = {setaccountKey} accountKey = {accountKey}/>}
    </div>
  );
}

export default App;