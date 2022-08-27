// import React, { useState } from 'react';
// import { authentication } from './configuration-firebase';
// import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom'
// import OtpInput from "react-otp-input";
// import RingLoader from "react-spinners/RingLoader";

// import * as constant from '../../constant/content'
// import * as routeconstant from '../../constant/routeconstant'

// import testImg from './assets/wallpaper-7-eleven-delivery-02.jpeg'
// import logo from '../../assets/logo.png'

// import './style.css'

// const Verifyotp = ({userPhone}) => {

//     const [ OTP, setOTP] = useState("");
//     const [ messageResendOTP, setMessageResendOTP] = useState(false)
//     const [ loading , setLoading] = useState(false);
//     const navigate = useNavigate()

//     const generateRecaptcha = () => {
//         window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//             'size': 'invisible',
//             'callback': (response) => {       
//             }
//         }, authentication);
//     }

//     const ResendOTP = (e) => {
//         setMessageResendOTP(true)
//         generateRecaptcha();
//         let appVerifier = window.recaptchaVerifier;
//         signInWithPhoneNumber(authentication,userPhone,appVerifier)
//         .then(confirmationResult => {
//             window.confirmationResult = confirmationResult;
//         }).catch((error) => {
//             console.log(error);
//         })
//     }


//     const verifyOTP = (otp) => {
//         setLoading(true)
//         setOTP(otp);
//         if(otp.length === 6){
//             let confirmationResult = window.confirmationResult;
//             confirmationResult.confirm(otp).then(() => {
//                 setLoading(false)
//                 navigate(routeconstant.RouteContent.information)
//             }).catch((error) => {
//                 console.log(error)
//             })
//         }
//     }

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
//             <div className='hidden sm:block bg-gray-100'>
//                 <img className='w-full h-full object-cover photo' src={testImg} alt="" />
//             </div>
//             <div className='bg-white flex flex-col mb-14 pb-5'>
//                 <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
//                     <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
//                 </div>
//                 <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-14 justify-center' >
//                     <div className='text-left py-6 pt-14'>
//                         <h2 className='text-2xl font-bold' >{constant.VerifyphoneOTPContent.title}</h2>
//                         <h5>{userPhone}</h5>
//                     </div>
//                     <div className='flex flex-col py-2 mt-6'>
//                         <div className='pr-2 ml-1 pt-2'>
//                             <OtpInput
//                                 value={OTP} onChange={(e) =>verifyOTP(e)}
//                                 numInputs={6}
//                                 isInputNum={true}
//                                 type="number"
//                                 required
//                                 inputStyle={{
//                                     width: "40px",
//                                     height: "40px",
//                                     margin: "0 5px",
//                                     fontSize: "1rem",
//                                     borderRadius: 4,
//                                     border: "1px solid rgba(0,0,0,0.3)"
//                                 }}
//                             />
//                         </div>  
//                     </div>
//                     {messageResendOTP === false?
//                         <>
//                             <div className='pt-12 pr-8'>
//                                 <h2 className='text-red-500 text-sm underline text-center' onClick={ResendOTP}>{constant.VerifyphoneOTPContent.resendOTP}</h2>
//                             </div>
//                         </>
//                         :
//                         <>
//                             <div className='pt-12 pr-8'>
//                                 <h2 className='text-red-500 text-sm text-center'>{constant.VerifyphoneOTPContent.successresendOTP}</h2>
//                             </div>
//                         </>
//                     } 
//                     </div>       
//                     <div id="recaptcha-container"></div>   
//             </div>
            
//         </div>

//     )

// }

// export default Verifyotp