import React, {useEffect,useState} from 'react'
import Auth from '../configuration/configuration-aws'
import testImg from '../../assets/wallpaper-page-2-1.jpeg'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Page2 = () => {

    const [expandForm, setExpandForm] = useState(false);

    useEffect( () => {
        Auth.currentSession()
        .then(data => {
            console.log(data);
            const token = data.getAccessToken();
            console.log(token.getJwtToken()); 
          })
        .catch(err => console.log(err));
    }, [])

    const Savepreliminaryinfomation = async () => {
        // let token;
        // Auth.currentSession()
        // .then(data => {
        //     console.log(data);
        //     token = data.getAccessToken();
        //     console.log(token.getJwtToken()); 
        //   })
        // .catch(err => console.log(err));
        
        // var data = { 
        //     "userEmail"  : "test@hotmail.com",
        //     "userPhone"    : "081-6415228",
        //     "userStatus"    : "ผู้สมัคร",
        //     "userCountry"   : "กรุงเทพ",
        //     "userName"      : "นายสมชาย",
        //     "userSurName"   : "ชมภูวงศ์",
        //     "startDate"     : "2020-05-13T08:30:00+7:00"};
        // await axios({
        //     method: 'post',
        //     url: 'https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/user?userId=test',
        //     headers: { 
        //        'Authorization': token.getJwtToken(), 
        //        'Content-Type': 'text/plain'
        //     },
        //     data: data
        // }).then((data) => {
        //     console.log('response: ' ,data)
        // }).catch((err)=>{
        //     console.log('error: ' ,err)
        // })
        setExpandForm(true);
    }

    if(expandForm){
        return <Redirect to="/verifyphone" />;
    }

    return (  
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
        <div className='hidden sm:block bg-gray-100'>
            <img className='w-59 h-59 object-cover photo  pt-14 mt-14' src={testImg} alt="" />
        </div>
        <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8' onSubmit={Savepreliminaryinfomation} >
                <h2 className='text-2xl font-bold text-left py-6'>กรอกข้อมูลผู้ใช้งาน</h2>
                <div className='flex flex-col py-2'>
                    <input type='text' className='border-bottom pl-4 pb-2 pt-2' name='name' id="exampleInputName" placeholder='ชื่อ'/>
                </div>
                <div className='flex flex-col py-2'>
                    <input type='text' className='border-bottom pl-4 pb-2 pt-2' name='surname' id="exampleInputSurname" placeholder='นามสกุล'/>
                </div>
                <div className='flex flex-col py-2'>
                    <input type='text' className='border-bottom pl-4 pb-2 pt-2' name='email' id="exampleInputEmail" placeholder='อีเมลที่ใช้'/>
                </div>
                <div className='flex flex-col py-2'>
                <select id="countries" name='country' type='text' className="border-bottom text-gray-400 pl-3 text-sm block w-full p-2.5 ">
                    <option>กรุงเทพ</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </select>
                </div>
                
                <div className='pl-4 pr-4 ml-1'>
                    <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>เข้าสู่ระบบ</button>
                </div>
            </form>
                 
        </div>
    </div>
    )
}


export default Page2;