import React, { useState, useContext } from 'react';
import { authentication } from '../../configuration/configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../service';
import OtpInput from "react-otp-input";
import RingLoader from "react-spinners/RingLoader";

import * as routeconstant from '../../constant/routeconstant'
import * as constant from '../../constant/content'

import { AuthContext } from '../../auth/Auth'

const ConfirmphoneComponent = ({userPhone}) => {

    const [ OTP, setOTP] = useState("");
    const [ messageResendOTP, setMessageResendOTP] = useState(false)
    const { currentUser } = useContext(AuthContext);
    const [ loading , setLoading] = useState(false);
    const [ isCodeNotcorrect , setIsCodeNotcorrect] = useState(false);
    const navigate = useNavigate()

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': () => {  
            }
        }, authentication);
    }

    const ResendOTP = (e) => {
        setMessageResendOTP(true)
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
        setOTP(otp);
        if(otp.length === 6){
            setLoading(true)
            setIsCodeNotcorrect(false)
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then( async () => {
                const userId = currentUser.username
                var data = {
                    "updateKey"     : "userPhone",
                    "updateValue"   : userPhone
                }
                var params = {
                    "userId" : userId
                }
                await updateUser( params, data).then((response) => {
                    if(response.status === 200){
                        setLoading(false)
                        navigate(routeconstant.RouteContent.information, { state: { currentstep: 1} })
                    }else{
                        setLoading(false)
                    }
                }).catch((err)=>{
                    setLoading(false)
                    console.log('error: ' ,err)
                })
            }).catch((error) => {
                setLoading(false)
                setIsCodeNotcorrect(true)
                console.log(error)
            })
        }
    }

    return (
        <div>
            <div>
                <div className='text-left py-6 pt-14'>
                    <h2 className='text-2xl font-bold' >{constant.ConfirmphoneContent.title}</h2>
                    <h5>{userPhone}</h5>
                </div>
                <div className='flex flex-col py-2 mt-6'>
                    <div className='pr-2 ml-1 pt-2'>
                        <OtpInput
                            value={OTP} onChange={(e) =>verifyOTP(e)}
                            numInputs={6}
                            isInputNum={true}
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
                    {loading === false?
                        <>
                        </>
                        :                        
                        <>
                        <div className="mt-4 pl-10 pt-4 flex">
                            <RingLoader
                                size={25}
                                color={"#599c3d"}
                                loading={loading}
                            />
                            <div className="pl-4 text-center">
                                {constant.ConfirmphoneContent.loading}
                            </div>
                        </div>
                        </>
                    }   
                    {isCodeNotcorrect === true?
                        <>
                        <div className='pt-12 pr-6'>
                                <h2 className='text-red-500 text-sm text-center' onClick={ResendOTP}>{constant.ConfirmphoneContent.codenotcorrect}</h2>
                        </div>
                        </>
                        :                        
                        <>
                        </>
                    }
                </div>
                    {messageResendOTP === false?
                        <>
                            <div className='pt-12 pr-8'>
                                <h2 className='text-red-500 text-sm underline text-center' onClick={ResendOTP}>{constant.ConfirmphoneContent.resendcode}</h2>
                            </div>
                        </>
                        :
                        <>
                            <div className='pt-12 pr-8'>
                                <h2 className='text-red-500 text-sm text-center' >{constant.ConfirmphoneContent.successresendcode}</h2>
                            </div>
                        </>
                    }
                </div>
                <div id="recaptcha-container"></div>
            </div>

    )

}

export default ConfirmphoneComponent