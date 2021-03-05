import React, {useState, useEffect} from 'react'
import axios from "axios"

const TransactionHistory = ({accountKey}) => {
    const[transactionHistory, settransactionHistory] = useState()

    async function makeRequest() {
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
        console.log(res.data);

      }
      //makeRequest();

      useEffect(() => {
          makeRequest();

      }, [accountKey])

    return (
        <div>
            <h2>Transaction History: ${transactionHistory}</h2>
        </div>
    )
}

export default TransactionHistory
