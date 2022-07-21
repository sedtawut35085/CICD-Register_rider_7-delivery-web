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
                <h1>ใส่เบอร์โทรศัพท์</h1>
                <div>
                    <input type="tel"  className='border pl-4 pb-2 pt-2'  id="phoneNumberInput" name="phonenumber"/>
                </div>
                {expandForm === true?
                 <>
                   <div>
                       <label>OTP</label>
                       <input type="number" className='border pl-4 pb-2 pt-2' id="otpinput" value={OTP} onChange={(e) => verifyOTP(e)} />
                   </div>
                 </>
                 :
                 null
                }
                {
                    expandForm === false?
                    <button type="submit" className='border w-40 my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>Request OTP</button>
                    :
                    null
                }
                <div id="recaptcha-container"></div>
            </form>
        </div>
    )

}

export default Verifyphone