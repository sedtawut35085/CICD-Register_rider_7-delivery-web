import { useState } from "react";
import { authentication } from '../../configuration/configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';

import VerifyotpComponent from '../ConfirmphoneComponent';
import * as constant from '../../constant/content'

import wallpaperpreliminary from '../../assets/wallpaper-7-eleven-delivery-02.jpeg'
import logo from '../../assets/logo.png'

const RegisterphoneComponent = () => {

    // const countryCode = "+66";
    const [phoneNumber, setPhoneNumber] = useState("");
    const [expandForm, setExpandForm] = useState(false);

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': () => {
            }
        }, authentication);
    }

    const requestotp = async (e) => {
        e.preventDefault();
        const { phonenumber } = e.target.elements;
        setPhoneNumber(phonenumber.value)
        //+66960531207
        if(phonenumber.value >= 12){
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(authentication,phonenumber.value,appVerifier)
            .then(confirmationResult => {
                setExpandForm(true);
                window.confirmationResult = confirmationResult;     
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <form onSubmit={requestotp}>        
                <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
                    <div className='hidden sm:block bg-gray-100'>
                        <img className='w-full h-full object-cover photo' src={wallpaperpreliminary} alt="" />
                    </div>
                    <div className='bg-white flex flex-col mb-14 pb-5'>
                        <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                            <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
                        </div>
                        <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-14 justify-center' >
                        {expandForm === false?
                            <>
                               <div>
                                    <h2 className='text-2xl font-bold text-left py-6 pt-14'>{constant.RegisterphoneContent.title}</h2>
                                    <div className='flex flex-col py-2 mt-6'>
                                        <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.RegisterphoneContent.label.phone}</label>
                                        <input
                                            type="tel" required
                                            className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder={constant.RegisterphoneContent.placeholder.phone} id="phoneNumberInput" name="phonenumber"
                                        />
                                    </div>
                                    <div className='pl-4 pr-4 ml-1 mt-6'>
                                        <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>{constant.RegisterphoneContent.button.submit}</button>
                                    </div>              
                               </div>
                            </>
                            :
                            <>
                                <VerifyotpComponent userPhone={phoneNumber}></VerifyotpComponent>
                            </>
                        }
                        </div>       
                    </div>
                </div>
                <div id="recaptcha-container"></div>
            </form>
        </div>
    )

}

export default RegisterphoneComponent