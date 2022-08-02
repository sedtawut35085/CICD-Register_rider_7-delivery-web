import React, { useState } from 'react';
import { authentication } from './configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import testImg from './assets/wallpaper-7-eleven-delivery-02.jpeg'
import logo from '../../assets/logo.png'
import { Redirect } from 'react-router-dom'
import OtpInput from "react-otp-input";

const Verifyotp = ({userPhone}) => {
    const [correct, setCorrect] = useState(false);
    const [OTP,setOTP] = useState("");
    const [messageResendOTP,setMessageResendOTP] = useState("คลิกเพื่อส่งรหัส OTP อีกครั้ง")

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                
            }
        }, authentication);
    }

    const ResendOTP = (e) => {
        setMessageResendOTP('ส่งรหัส OTP อีกครั้งเรียบร้อย')
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication,userPhone,appVerifier)
        .then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            
        }).catch((error) => {
            console.log(error);
        })
    }


    const verifyOTP = (otp) => {
        console.log('otp');
        console.log(otp)
        setOTP(otp);
        // setOTP(otp);
        if(otp.length === 6){
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
        return <Redirect to="/information" />;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
            <div className='hidden sm:block bg-gray-100'>
                <img className='w-full h-full object-cover photo' src={testImg} alt="" />
            </div>
            <div className='bg-white flex flex-col mb-14 pb-5'>
                <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                    <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
                </div>
                <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-14 justify-center' >
                    <div className='text-left py-6 pt-14'>
                        <h2 className='text-2xl font-bold' >กรอกเลข OTP ที่ส่งไปยังเลข</h2>
                        <h5>{userPhone}</h5>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className=''>
                            <OtpInput
                                value={OTP} onChange={(e) =>verifyOTP(e)}
                                // separator={
                                // <span>
                                //     <strong>-</strong>
                                // </span>
                                // }
                                numInputs={6}
                                type="number"
                                required
                                inputStyle={{
                                width: "40px",
                                height: "40px",
                                margin: "0 5px",
                                fontSize: "1rem",
                                borderRadius: 4,
                                border: "1px solid rgba(0,0,0,0.3)"
                                }}
                            />
                        </div>
                        {/* <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">เลข OTP 6 หลัก</label>
                            <input
                              type="number" required
                              className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="000000" id="otpinput" name="phonenumber" value={OTP} onChange={(e) =>verifyOTP(e)}
                        /> */}
                    </div>
                
                   
                    <div className='pl-10 ml-6 pt-3 mt-2'>
                        <h2 className='text-red-500 text-sm pt-3 underline' onClick={ResendOTP}>{messageResendOTP}</h2>
                    </div>
                   
                    </div>       
                    <div id="recaptcha-container"></div>   
            </div>
            
        </div>

    )

}

export default Verifyotp