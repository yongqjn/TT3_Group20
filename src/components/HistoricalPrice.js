import React, {useState} from 'react'
import axios from "axios"

const HistoricalPrice = () => {
    const[historicalPrice, sethistoricalPrice] = useState()

    async function makeRequest() {
        const config = {
          method: "post",
          url:
            "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical",
          headers: { "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5" },

        };
    
        let res = await axios(config);
        //sethistoricalPrice(res.data)
        console.log(res.data);

      }
    
      makeRequest();

    return (
        <div>
            <h2>Historical Price: ${historicalPrice}</h2>
        </div>
    )
}

export default HistoricalPrice
