import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import testImg from '../LoginComponent/assets/wallpaper-test-5.webp'
import Auth from '../configuration/configuration-aws'

import { Redirect } from 'react-router-dom'

const ConfirmCodePage = ({userEmail, userPassword}) => {
    // const { currentUser } = useContext(AuthContext);  
    const [correct, setCorrect] = useState(null);

    console.log(userEmail);
    console.log(userPassword);

    const confirmCode = async (e) =>  {
        e.preventDefault();
        const { code} = e.target.elements;
        console.log('code: ',code.value);
        const email = userEmail;
        const password =userPassword;
        await Auth.confirmSignUp(email,code.value, {
            forceAliasCreation: true
        }).then(data => 
            {console.log(data);
            })
        .catch(err => console.log(err));
        await Auth.signIn(email, password)
           .then(user => {
               console.log('success: ' ,user);
               setCorrect(true);})
           .catch(err => console.log(err));   
    }

    if(correct){
        return <Redirect to="/signup" />;
    }


    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover photo' src={testImg} alt="" />
            </div>
            <div className='bg-white flex flex-col mb-14 pb-5'>
                <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                    <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
                </div>
                <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-3 justify-center ' onSubmit={confirmCode}>
                    <h2 className='text-2xl font-bold text-left py-6'>ใส่รหัส 6 ตัวที่ส่งไปยังเมล {userEmail}</h2>
                    <div className='flex flex-col py-2'>
                        {/* <FaUserAlt  className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaUserAlt> */}
                        <input type='code' className='border-bottom pl-12 pb-2 pt-2' name='code' id="exampleInputCode" required placeholder='รหัสที่ส่งไปยังอีเมลของท่าน' aria-describedby="codeHelp"  />
                    </div>
                    {/* <div className='flex flex-col py-2'>
                        <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                        <input value={confirmPassword} className='border-bottom pl-12 pb-2 pt-2' type="password" name="confirmpassword" required placeholder='กรอกรหัสผ่านอีกครั้ง' onChange={(e) => checkValidation(e)} />
                        <div className='ml-2 text-sm text-red-500'>{isErrorMessage}</div>
                    </div> */}
                    <div className='pl-4 pr-4 ml-1'>
                        <button className='transition border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl delay-150'>ยืนยัน</button>
                    </div>
                </form>         
            </div>
        </div>
        // <div className='App'>
        //     <h3>Sign Up Form</h3>
        //     <Formik 
        //         initialValues={{code: ''}}
        //         onSubmit={(values) => {
        //         console.log("values", values)
        //         confirmCode(values.code)
        //     }}
        //     >
        //         <Form>
        //             <Field name="code" placeholder="Enter code"/>
        //             <button type='submit'>confirm code</button>
        //         </Form>

        //     </Formik>
        // </div>
    )

}

export default ConfirmCodePage;