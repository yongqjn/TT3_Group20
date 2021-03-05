import React, {useState, useEffect} from 'react'
import axios from "axios"

const TransactionHistory = ({accountKey}) => {
    const [responses, setResponses] = useState()
    const [transactionHistory, settransactionHistory] = useState()

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
        //console.log(res.data);
        return res.data
      }

      useEffect(() => {
         setResponses(makeRequest());
         console.log(responses);

      }, [accountKey])

    return (
        <div>
            <h2>Transaction History ${transactionHistory}</h2>
            {/* {
                responses.map((item)=>(
                    <ul key= {item.timestamp}>
                        orderType: ${item.orderType}    Asset Amount: ${item.assetAmount}
                    </ul>
                ))
            } */}
        </div>
    )
}

export default TransactionHistory
