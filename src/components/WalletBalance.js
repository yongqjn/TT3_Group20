import React,{useState, useEffect} from 'react'
import axios from 'axios'

const WalletBalance = ({accountKey}) => {
    const[Assetbal, setAssetbal] = useState()
    const[Cashbal, setCashbal] = useState()

    async function makeRequest() {
        const config = {
          method: "post",
          url:
            "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
          headers: { "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5" },
          data: JSON.stringify({
            accountKey: accountKey
          }),
        };
        
        let res = await axios(config);
        //console.log(res.data);
        setAssetbal(res.data.assetBalance);
        setCashbal(res.data.cashBalance);

        };

        useEffect(() => {
          makeRequest();
        }, [accountKey])
        
    return (
        <div>
            <h2>Asset Balance: ${Assetbal}</h2>
            <h2>Cash Balance: ${Cashbal}</h2>
        </div>
    )
}

export default WalletBalance
