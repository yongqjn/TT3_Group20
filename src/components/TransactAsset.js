import React, {useState, useEffect} from 'react'
import axios from "axios"

const TransactAsset = ({accountKey}) => {
    const [purchase, setpurchase] = useState(true);
    const [purchaseValue, setpurchaseValue] = useState(1);
    const [errorCatch, setErrorCatch] = useState(false);

    async function makeRequest() {
        const config = {
            method: "post",
            url:
              "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
            headers: { "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5" },
            data: JSON.stringify({
                accountKey: accountKey,
                orderType: (purchase? "BUY" : "SELL"),
                assetAmount: purchaseValue
            })
        }
        
        let res = await axios(config);
        console.log(res.data)
        if(res.data.accountKey === "0178ce58-5aec-4eb8-a5d0-26dd04d2d726"){
            setErrorCatch(false)
        }
        else{
            setErrorCatch(true)
        }
    }

    const assetHandler = (e) => {
        setpurchaseValue(e);
    }

    const onSubmit = () =>{
        makeRequest();
    }


    return (
        <div>
            <h2>Transact Asset</h2>
            <button onClick= {()=>setpurchase(!purchase)}>{purchase?"BUY":"SELL"}</button>
            <br></br>
            <input type = "number" name="Asset Amount: " value = {purchaseValue} onChange = {(e) => assetHandler(e.target.value)}/>
            <br></br>
            {/* <p>{!errorCatch && "Transaction Successful!"}</p> */}
            <br></br>
            <button type="submit" onClick={onSubmit}> Submit Request </button>
            
        </div>
    )
}

export default TransactAsset
