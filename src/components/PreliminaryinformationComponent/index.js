import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from "moment"
import RingLoader from "react-spinners/RingLoader";

import { AuthContext } from '../../auth/Auth'
import * as constant from '../../constant/content'
import * as routeconstant from '../../constant/routeconstant'
import { saveUser } from '../../service';

import wallpaperpreliminary from '../../assets/wallpaper-preliminary.jpeg'
import NavbarComponent from '../NavbarComponent';

const PreliminaryComponent = () => {
    const navigate = useNavigate()
    const [ loading , setLoading] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [ isResponseError , setIsResponseError ]  = useState(false);

    const Savepreliminaryinfomation = async (e) => {
        setLoading(true)
        e.preventDefault();
        const { name, surname , email ,country} = e.target.elements;
        const userId = currentUser.username
        var data = { 
            "userEmail"     : email.value,
            "userStatus"    : "ผู้สมัคร",
            "userCountry"   : country.value,
            "userName"      : name.value,
            "userSurName"   : surname.value,
            "startDate"     : moment().format("DD/MM/YYYY hh:mm:ss")};
        var params = {
            "userId" : userId
        } 
        await saveUser(params,data).then((response) => {
            if(response.status === 200){
                setLoading(false)
                navigate(routeconstant.RouteContent.verifyphone)
            }else{
                setLoading(false)
                setIsResponseError(true)
            }
        }).catch((err)=>{
            setLoading(false)
            console.log('error: ' ,err)
        })
    }

    return (   
       <div>
        <NavbarComponent />
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>          
            <div className='hidden sm:block bg-gray-100'>
                <img className='w-full h-full object-cover photo' src={wallpaperpreliminary} alt="" />
            </div>
            <div className='bg-white flex flex-col mb-14 pb-5'>
                <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 md:pt-14 justify-center md:mt-16' onSubmit={Savepreliminaryinfomation} >
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
                            {constant.optionscountry.map((option) => (
                                <option disabled={option.disable} key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}       
                        </select>

                    </div>
                    
                    <div className='pl-4 ml-1'>
                    {loading === false?
                        <>
                        <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>{constant.PreliminaryContent.button.submit}</button>
                        </>
                        :                        
                        <>
                        <div className="my-4 pl-12 pt-2 flex">
                            <RingLoader
                                size={25}
                                color={"#599c3d"}
                                loading={loading}
                            />
                            <div className="pl-4">
                                กำลังบันทึกข้อมูล
                            </div>
                        </div>
                        </>
                    } 
                     {isResponseError === true?
                        <>
                        <div className="md:col-span-12 text-center mt-4">
                            <h1 className="text-red-500">{constant.PersonalInformationContent.messegeerror}</h1>
                        </div>
                        </>
                        :
                        <>
                        </>
                    }  
                    </div>
                </form>   
            </div>
        </div>
       </div>
    )
}

export default PreliminaryComponent;