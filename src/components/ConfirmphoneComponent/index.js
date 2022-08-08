import React, { useState, useContext } from 'react';
import { authentication } from '../../configuration/configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import OtpInput from "react-otp-input";
import axios from 'axios'

import { AuthContext } from '../../auth/Auth'
import Auth from '../../configuration/configuration-aws'

const ConfirmphoneComponent = ({userPhone}) => {

    const [OTP,setOTP] = useState("");
    const [messageResendOTP,setMessageResendOTP] = useState(false)
    const { currentUser } = useContext(AuthContext);
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
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then( async () => {
                let token;
                const userId = currentUser.username
                await Auth.currentSession()
                .then(data => {
                    token = data.getAccessToken();
                })
                .catch(err => console.log(err));
                var data = {
                    "updateKey"     : "userPhone",
                    "updateValue"   : "+66960531207"
                }
                var params = {
                    "userId" : userId
                }
                await axios({
                    method: 'patch',
                    url: 'https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/user',
                    params: params,
                    headers: { 
                        'Authorization': token.getJwtToken(), 
                        'Content-Type': 'text/plain'
                    },
                    data: data
                }).then(() => {
                    navigate('/information')
                }).catch((err)=>{
                    console.log('error: ' ,err)
                })
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div>
            <div>
                <div className='text-left py-6 pt-14'>
                    <h2 className='text-2xl font-bold' >กรอกเลข OTP ที่ส่งไปยังเลข</h2>
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
                    </div>
                    {messageResendOTP === false?
                        <>
                            <div className='pt-12 pr-8'>
                                <h2 className='text-red-500 text-sm underline text-center' onClick={ResendOTP}>คลิกเพื่อส่ง OTP อีกครั้ง</h2>
                            </div>
                        </>
                        :
                        <>
                            <div className='pt-12 pr-8'>
                                <h2 className='text-red-500 text-sm text-center' >ส่งรหัสไปยังเมลของคุณเรียบร้อยแล้ว</h2>
                            </div>
                        </>
                    }
                </div>
                <div id="recaptcha-container"></div>
            </div>

    )

}

export default ConfirmphoneComponent