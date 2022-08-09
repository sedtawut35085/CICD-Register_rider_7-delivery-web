import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import Auth from '../../configuration/configuration-aws'
import * as constant from '../../constant/content'

const ConfirmemailComponent = ({userEmail, userPassword}) => {

    const [messageError,setMessageError] = useState(null);
    const [isResendCode, setIsResendCode] = useState(false)

    const navigate = useNavigate()

    const confirmCode = async (e) =>  {
        e.preventDefault();
        const { code } = e.target.elements;
        let isConfirmcode = false;
        await Auth.confirmSignUp( userEmail, code.value, {
            forceAliasCreation: true
        }).then(() => 
            {
                isConfirmcode = true
            })
        .catch(err => 
            {
                setMessageError(constant.ConfirmemailContent.errorcodemessage)
            }
        );
        if(isConfirmcode){
            await Auth.signIn(userEmail, userPassword)
            .then(() => {
                navigate('/preliminary')
            })
            .catch(err => console.log(err));   
        }   
    }

    const resendConfirmationCode = async (e) => {
        try {
            await Auth.resendSignUp(userEmail);
            setIsResendCode(true)
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    return (
        <div> 
            <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-16 justify-center mt-4 ' onSubmit={confirmCode}>
                <div className='text-left py-6 pt-12'>
                    <h2 className='text-2xl font-bold pb-1' >{constant.ConfirmemailContent.title}</h2>
                    <h5 className='pl-1 text-sm'>{userEmail}</h5>
                </div>
                <div className='flex flex-col py-2'>
                    <FaCode className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaCode>
                    <input type='code' className='border-bottom pl-12 pb-2 pt-2' name='code' id="exampleInputCode" required placeholder='รหัสที่ส่งไปยังอีเมลของท่าน' aria-describedby="codeHelp"  />
                    <div className='ml-2 text-sm text-red-500'>
                        {messageError}
                    </div>                    
                </div>
                <div className='pl-4 pr-4 ml-1 pt-2'>
                    <button className='transition border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl delay-150'>{constant.ConfirmemailContent.button.submit}</button>
                </div>
                {isResendCode === false?
                    <>
                        <div className='pt-2'>
                            <h2 className='text-red-500 text-sm underline text-center' onClick={resendConfirmationCode}>{constant.ConfirmemailContent.resendcode}</h2>
                        </div>
                    </>
                    :                        
                    <>
                        <div className='pt-2'>
                            <h2 className='text-red-500 text-sm text-center' >{constant.ConfirmemailContent.successresendcode}</h2>
                        </div>
                    </>
                }
            </form>         
        </div>
    )

}

export default ConfirmemailComponent;