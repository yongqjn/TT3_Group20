import React, {useEffect} from 'react'
import axios from 'axios'


const user_info = {
    Headers: {
        x-api-key: 
    },
    Request:{
        
    }

}
const UserInformation = ({accountKey, firstName, lastName, nric, address, phoneNumber, email}) => {

    useEffect(() => {
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", 
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div>
            <ul >{`Account Key: ${accountKey}`}</ul>
            <ul >{`First Name:  ${firstName}`}</ul>
            <ul >{`Last Name: ${lastName}`}</ul>
            <ul >{`NRIC:  ${nric}`}</ul>
            <ul >{`Address:  ${address}`}</ul>
            <ul >{`Phone Number:  ${phoneNumber}`}</ul>
            <ul >{`Email:  ${email}`}</ul>
        </div>
    )
}

export default UserInformation
