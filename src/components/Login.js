import React, { useState, useEffect } from "react";
import axios from "axios";
import InvalidInput from "./InvalidInput"

function Login({checkLogin, isLoggedIn}) {
  
  const account = {
    username: "Group20",
    password: "IF8v6jPuIsQFJ7i"
  }

  const [UserName, setUserName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [submit, setSubmit] = useState("")

  
  const UserNameHandler = (e) => {
    setUserName(e);
  };

  const PassWordHandler = (e) => {
    setPassWord(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(UserName);
    if(UserName === account.username && PassWord === account.password){
      checkLogin(true);
    }
    console.log(UserName);
    console.log(PassWord);
  };

  // useEffect(()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${submit}`)
  //   .then(response=>{
  //       alert(response.data.title)
  //   })
  //   .catch(error=>{
  //       console.log(error)
  //   })

  // },[submit])

  return (
    <div>
      <form >
        <div>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Please enter your username"
            value={UserName}
            onChange={(e) => UserNameHandler(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Please enter your password"
            value={PassWord}
            onChange={(e) => PassWordHandler(e.target.value)}
          />
        </div>
        <div>
          {!isLoggedIn && <InvalidInput message={"Please enter valid login details"} />}
        </div>
        <input type="submit" value="Submit" onClick={onSubmit}></input>
      </form>
    </div>
  );
}

export default Login;
