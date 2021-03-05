import React, {useState, useEffect} from 'react'
import axios from "axios"

const TransactionHistory = ({accountKey}) => {
    const [responses, setResponses] = useState()
    const [transactionHistory, settransactionHistory] = useState()
    const [assetAmount, setassetAmount] = useState()
    const [assetPrice, setassetPrice] = useState()
    const [cashAmount, setcashAmount] = useState()
    const [orderType, setorderType] = useState()
    const [timeStamp, settimeStamp] = useState();
    const [transactionId, settransactionId] = useState();

    async function HistorymakeRequest() {
        const config = {
            method: "post",
            url:
              "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
            headers: { "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5" },
            data: JSON.stringify({
                accountKey: accountKey
            })
        }
    
        let res = await axios(config);
        console.log(res.data[0].accountKey)
        setassetAmount(res.data[0].assetAmount)
        setassetPrice(res.data[0].assetPrice)
        setcashAmount(res.data[0].cashAmount)
        setorderType(res.data[0].orderType)
        settimeStamp(res.data[0].timeStamp)
        settransactionId(res.data[0].transactionId)
      }
      HistorymakeRequest();

    //   useEffect(() => {
    //     makeRequest();

    //   }, [accountKey])

    return (
        <div>
            <h2>Recent Transaction History </h2>
            <ul>{`Transaction ID:  ${transactionId}`}</ul>
            <ul>{`Asset Amount: ${assetAmount}`}</ul>
            <ul>{`Asset Price:  ${assetPrice}`}</ul>
            <ul>{`Cash Amount:  ${cashAmount}`}</ul>
            <ul>{`Order Type:  ${orderType}`}</ul>

        </div>
    )
}

export default TransactionHistory
