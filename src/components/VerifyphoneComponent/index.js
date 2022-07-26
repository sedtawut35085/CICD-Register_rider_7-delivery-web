import { useState } from "react";
import { authentication } from './configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import VerifyotpComponent from './verifyotpComponent';
import testImg from './assets/wallpaper-7-eleven-delivery-02.jpeg'
import logo from '../../assets/logo.png'

const Verifyphone = () => {

    // const countryCode = "+66";
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
                    {/* <h1>ใส่เบอร์โทรศัพท์</h1>
                    <div>
                        <input type="tel"  className='border pl-4 pb-2 pt-2'  id="phoneNumberInput" name="phonenumber"/>
                        <button type="submit" className='border w-40 my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>Request OTP</button>
                    </div> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
                        <div className='hidden sm:block bg-gray-100'>
                            <img className='w-full h-full object-cover photo' src={testImg} alt="" />
                        </div>
                        <div className='bg-white flex flex-col mb-14 pb-5'>
                            <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                                <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
                            </div>
                            <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-14 justify-center' >
                                <h2 className='text-2xl font-bold text-left py-6 pt-14'>กรอกข้อมูลเบอร์โทรศัพท์</h2>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">เบอร์โทรศัพท์ของคุณ</label>
                                    <input
                                        type="tel" required
                                        className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="+6696165211" id="phoneNumberInput" name="phonenumber"
                                    />
                                </div>
                                <div className='pl-4 pr-4 ml-1'>
                                    <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>ยืนยัน</button>
                                </div>
                            </div>
                                
                        </div>
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