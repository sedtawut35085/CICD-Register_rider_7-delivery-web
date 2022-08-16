import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from "moment"

import Auth from '../../configuration/configuration-aws'
import { AuthContext } from '../../auth/Auth'
import * as constant from '../../constant/content'
import * as routeconstant from '../../constant/routeconstant'

import wallpaperpreliminary from '../../assets/wallpaper-preliminary.jpeg'
import logo from '../../assets/logo.png'

const PreliminaryComponent = () => {

    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext);

    const Savepreliminaryinfomation = async (e) => {
        e.preventDefault();
        const { name, surname , email ,country} = e.target.elements;
        let token;
        const userId = currentUser.username
        await Auth.currentSession()
        .then(data => {
            token = data.getAccessToken();
          })
        .catch(err => console.log(err));
        var data = { 
            "userEmail"     : email.value,
            "userStatus"    : "ผู้สมัคร",
            "userCountry"   : country.value,
            "userName"      : name.value,
            "userSurName"   : surname.value,
            "startDate"     : moment().format("DD-MM-YYYY hh:mm:ss")};
        var params = {
            "userId" : userId
        }
        await axios({
            method: 'post',
            url: 'https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/user',
            params: params,
            headers: { 
               'Authorization': token.getJwtToken(), 
               'Content-Type': 'text/plain'
            },
            data: data
        }).then(() => {
            navigate(routeconstant.RouteContent.verifyphone)
        }).catch((err)=>{
            console.log('error: ' ,err)
        })
    }

    return (  
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
        <div className='hidden sm:block bg-gray-100'>
            <img className='w-full h-full object-cover photo' src={wallpaperpreliminary} alt="" />
        </div>
        <div className='bg-white flex flex-col mb-14 pb-5'>
            <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
            </div>
            <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-8 justify-center' onSubmit={Savepreliminaryinfomation} >
                <h2 className='text-2xl font-bold text-left py-6'>{constant.PreliminaryContent.title}</h2>
                <div className='flex flex-col py-2'>
                    <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.PreliminaryContent.label.name}</label>
                    <input
                        type="text" required
                        className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder={constant.PreliminaryContent.placeholder.name} name='name' id="exampleInputName"
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.PreliminaryContent.label.surname}</label>
                    <input
                        type="text" required
                        className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder={constant.PreliminaryContent.placeholder.surname} name='surname' id="exampleInputSurname"
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.PreliminaryContent.label.email}</label>
                    <input
                        type="email" required
                        className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder={constant.PreliminaryContent.placeholder.email} name='email' id="exampleInputEmail"
                    />
                </div>
              
                <div className='flex flex-col py-2'>
                    <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 pt-1 text-sm">{constant.PreliminaryContent.label.country}</label>
                    <select required id="countries" name='country' type='text' className="border-bottom text-gray-700 pl-4 pb-2 pt-1 block w-fullfocus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ">
                        <option disabled={true} value="">ไม่ระบุ</option>
                        <option>กรุงเทพมหานคร</option>
                        <option>กระบี่</option>
                        <option>กาญจนบุรี</option>
                        <option>กาฬสินธุ์</option>
                        <option>กำแพงเพชร</option>
                        <option>ขอนแก่น</option>
                        <option>จันทบุรี</option>
                        <option>ฉะเชิงเทรา</option>
                        <option>ชลบุรี</option>
                        <option>ชัยนาท</option>
                        <option>ชัยภูมิ</option>
                        <option>ชุมพร</option>
                        <option>เชียงราย</option>
                        <option>เชียงใหม่</option>
                        <option>ตรัง</option>
                        <option>ตราด</option>
                        <option>ตาก</option>
                        <option>นครนายก</option>
                        <option>นครปฐม</option>
                        <option>นครพนม</option>
                        <option>นครราชสีมา</option>
                        <option>นครศรีธรรมราช</option>
                        <option>นครสวรรค์</option>
                        <option>นนทบุรี</option>
                        <option>นราธิวาส</option>
                        <option>น่าน</option>
                        <option>บึงกาฬ</option>
                        <option>บุรีรัมย์</option>
                        <option>ปทุมธานี</option>
                        <option>ประจวบคีรีขันธ์</option>
                        <option>ปราจีนบุรี</option>
                        {/* https://th.wikipedia.org/wiki/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%A2%E0%B9%88%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2 */}
                    </select>
                </div>
                <div className='pl-4 pr-4 ml-1'>
                    <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>{constant.PreliminaryContent.button.submit}</button>
                </div>
            </form>
                 
        </div>
    </div>
    )
}

export default PreliminaryComponent;