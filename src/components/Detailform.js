import React from "react";
import InvalidInput from "./InvalidInput";
import UploadImage from "./UploadImage";

function Detailform() {

  const [Age, setAge] = React.useState();
  const [IcIsValid, setIcIsValid] = React.useState(true);
  const [Ic, setIc] = React.useState("");
  const [isOfAge, setIsOfAge] = React.useState(true);
  const [branchCode, setbranchCode] = React.useState();
  const [branchCodeValidity, setbranchCodeValidity] = React.useState(true);

  function isOfMinAge(event) {
    var input = event.target.value;
    setAge(input);
    input > 18 ? setIsOfAge(true) : setIsOfAge(false);
  }

  const branchCodeHandler = (e) => {
    setbranchCode(e);
    console.log(e);
    (0 < e && e < 391)? setbranchCodeValidity(true): setbranchCodeValidity(false);

    console.log(branchCodeValidity)
  };

  const icHandler = (e) => {
    setIc(e);
    if (!e.match(/^[SFTG]\d{7}[A-Z]$/)) {
      setIcIsValid(false);
    } else {
      setIcIsValid(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(IcIsValid);
    console.log(isOfAge);
  };

  return (
    <div>
      <form>
        <label>Customer Name: </label>
        <input name="customerName"></input>
        <br></br>
        <label>Customer Age: </label>
        <input name="customerAge" onChange={isOfMinAge} value={Age}></input>
        {!isOfAge && <InvalidInput message={"Customer must be older than 18"} />}
        <br></br>
        <label>Service Officer Name: </label>
        <input name="serviceOfficerName"></input>
        <br></br>
        <label>NRIC: </label>
        <input
          type="text"
          name="nric"
          onChange={(e) => icHandler(e.target.value)}
          value={Ic}
        ></input>
        {!IcIsValid && <InvalidInput message={"IC format is upper case and with 7 numbers"} />}
        <br></br>
        <br></br>
        <label>Branch Code: </label>
        <input
          type="number"
          name="branchCode"
          value={branchCode}
          onChange={(e) => branchCodeHandler(e.target.value)}
        ></input>
        <br></br>
        {!branchCodeValidity && <InvalidInput message={"Please enter a valid branch code"} />}
        <br></br>
        <UploadImage />
        <br></br>
        <label>Product Type: </label>
        <input name="Product Type"></input>
        <br></br>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        <button>Save as Draft</button>
      </form>
    </div>
  );
}

export default Detailform;
