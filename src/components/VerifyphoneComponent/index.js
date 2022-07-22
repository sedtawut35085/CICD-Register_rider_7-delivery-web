import { useState } from "react";
import { authentication } from './configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import VerifyotpComponent from './verifyotpComponent';

const Verifyphone = () => {

    const countryCode = "+66";
    const [phoneNumber, setPhoneNumber] = useState("");
    const [expandForm, setExpandForm] = useState(false);
    

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                
            }
        }, authentication);
    }

    const requestotp = (e) => {
        e.preventDefault();
        const { phonenumber } = e.target.elements;
        console.log(phonenumber.value);
        setPhoneNumber(phonenumber.value)
        //+66960531207
        if(phonenumber.value >= 12){
            setExpandForm(true);
            // generateRecaptcha();
            // let appVerifier = window.recaptchaVerifier;
            // signInWithPhoneNumber(authentication,phonenumber.value,appVerifier)
            // .then(confirmationResult => {
            //     window.confirmationResult = confirmationResult;
            // }).catch((error) => {
            //     console.log(error);
            // })
        }
    }

    return (
        <div>
            <form onSubmit={requestotp}>        
                {expandForm === true?
                 <>
                    <VerifyotpComponent userPhone={phoneNumber}></VerifyotpComponent>
                 </>
                 :
                 null
                }
                {
                    expandForm === false?
                    <>
                    <h1>ใส่เบอร์โทรศัพท์</h1>
                    <div>
                        <input type="tel"  className='border pl-4 pb-2 pt-2'  id="phoneNumberInput" name="phonenumber"/>
                        <button type="submit" className='border w-40 my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>Request OTP</button>
                    </div>
                    </>
                    :
                    null
                }
                <div id="recaptcha-container"></div>
            </form>
        </div>
    //     <div>
    //     <form onSubmit={requestotp}>
    //         <h1>ใส่เบอร์โทรศัพท์</h1>
    //         <div>
    //             <input type="tel"  className='border pl-4 pb-2 pt-2'  id="phoneNumberInput" name="phonenumber"/>
    //         </div>
    //         <button type="submit" className='border w-40 my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>Request OTP</button>
    //         <div id="recaptcha-container"></div>
    //     </form>
    // </div>
    )

}

export default Verifyphone