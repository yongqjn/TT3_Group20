import React, {useState} from 'react'
import axios from 'axios'

const CurrentPrice = () => {
    const[currprice, setcurrprice] = useState()

    async function makeRequest() {
        const config = {
          method: "post",
          url:
            "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
          headers: { "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5" },

        };
    
        let res = await axios(config);
        setcurrprice(res.data.price)
        console.log(res.data);

      }
    
      makeRequest();

    return (
        <div>
            <h2>Current Price: ${currprice}</h2>
        </div>
    )
}

export default CurrentPrice
