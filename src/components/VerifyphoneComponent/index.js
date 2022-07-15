import { useState } from "react";
import { authentication } from './configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';

const Verifyphone = () => {

    const countryCode = "+66";
    const [phoneNumber, setPhoneNumber] = useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
    const [OTP,setOTP] = useState("");

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                
            }
        }, authentication);
    }

    const requestotp = (e) => {
        e.preventDefault();
        console.log(e.target.elements)
        const { phonenumber } = e.target.elements;
        console.log(phonenumber.value);
        if(phonenumber.value >= 12){
            setExpandForm(true);
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(authentication,phonenumber.value,appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const verifyOTP = (e) => {
        console.log('otp');
        const otp = e.target.value;
        setOTP(otp);
        if(otp.length === 6){
            console.log(otp);
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                const user = result.user;
                console.log('success');
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div>
            <form onSubmit={requestotp}>
                <h1>verify phone number</h1>
                <div>
                    <input type="tel" id="phoneNumberInput" name="phonenumber"/>
                </div>
                {expandForm === true?
                 <>
                   <div>
                       <label>OTP</label>
                       <input type="number" id="otpinput" value={OTP} onChange={(e) => verifyOTP(e)} />
                   </div>
                 </>
                 :
                 null
                }
                {
                    expandForm === false?
                    <button type="submit">Request OTP</button>
                    :
                    null
                }
                <div id="recaptcha-container"></div>
            </form>
        </div>
    )

}

export default Verifyphone