import React, { useEffect, useState } from "react";
import axios from "axios";

const UserInformation = ({accountKey, setaccountKey}) => {
  
  const [address, setaddress] = useState();
  const [email, setemail] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [nric, setnric] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [userName, setuserName] = useState();

  const axios = require("axios");

  async function makeRequest() {
    const config = {
      method: "post",
      url:
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
      headers: { "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5" },
      data: JSON.stringify({
        username: "Group20",
        password: "IF8v6jPuIsQFJ7i",
      }),
    };

    let res = await axios(config);
    //console.log(res.data);
    setaccountKey(res.data.accountKey);
    setaddress(res.data.address);
    setemail(res.data.email);
    setfirstName(res.data.firstName);
    setlastName(res.data.lastName);
    setnric(res.data.nric);
    setphoneNumber(res.data.phoneNumber);
    setuserName(res.data.userName);
  }

  makeRequest();

  return (
    <div>
        <h1>User Information</h1>
      <ul>{`First Name:  ${firstName}`}</ul>
      <ul>{`Last Name: ${lastName}`}</ul>
      <ul>{`NRIC:  ${nric}`}</ul>
      <ul>{`Address:  ${address}`}</ul>
      <ul>{`Phone Number:  ${phoneNumber}`}</ul>
      <ul>{`Email:  ${email}`}</ul>
    </div>
  );
};

export default UserInformation;
