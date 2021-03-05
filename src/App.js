import "./App.css";
import Detailform from "./components/Detailform";
import Login from "./components/Login";
import React, { useState } from "react";
import UserInformation from "./components/UserInformation";
import CurrentPrice from "./components/CurrentPrice";
import HistoricalPrice from "./components/HistoricalPrice";
import TransactionHistory from "./components/TransactionHistory";
import WalletBalance from "./components/WalletBalance";
import TransactAsset from "./components/TransactAsset";

function App() {
  const [accountKey, setaccountKey] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);


  return (
    <div>
      <h1>Welcome to DBS Seed</h1>
      <CurrentPrice />
      {!(accountKey === "") && <TransactionHistory accountKey={accountKey} />}
      {!(accountKey === "") && <WalletBalance accountKey={accountKey} />}
      {!(accountKey === "") && (
        <TransactAsset
          accountKey={accountKey}
        />
      )}
      {!isLoggedIn ? (
        <Login checkLogin={setLoggedIn} isLoggedIn={isLoggedIn} />
      ) : (
        <UserInformation
          setaccountKey={setaccountKey}
          accountKey={accountKey}
        />
      )}
    </div>
  );
}

export default App;
