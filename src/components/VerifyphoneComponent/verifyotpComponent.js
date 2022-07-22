import React, { useState } from 'react';

const Verifyotp = ({userPhone}) => {
    const [correct, setCorrect] = useState(false);
    const [OTP,setOTP] = useState("");


    const verifyOTP = (e) => {
        console.log('otp');
        const otp = e.target.value;
        setOTP(otp);
        if(otp.length === 6){
            console.log(otp);
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // const user = result.user;
                console.log('success');
                setCorrect(true)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    if(correct){
        console.log('correct confimcode')
    }

    return (
        <div>
            <h1>{userPhone}</h1>
            <label>OTP</label>
            <input type="number" className='border pl-4 pb-2 pt-2' id="otpinput" value={OTP} onChange={(e) => verifyOTP(e)} />
        </div>
    )

}

export default Verifyotp