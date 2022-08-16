import { useState } from "react";
import { useStepperContext } from "../../../context/UserContext";
import { FaCloudUploadAlt } from 'react-icons/fa'

import DatePicker from "react-datepicker";

import idcard from '../../../assets/idcard.png'
import profile from '../../../assets/profile.png'
import "react-datepicker/dist/react-datepicker.css";
import './style.css'

export default function Personalinformation({isMessageErrorPersonalPicture,isMessageErrorIdCard}) {
  const { userData, setUserData } = useStepperContext();
  const [ namePersonalPicture , setNamePersonalPicture] = useState(null);
  const [ nameIdCard , setNameIdCard] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const dateChanged = (date, name) => {
    setUserData({ ...userData, [name]: date });
  }

  const onSelectFile = async (event) => {
    const name = event.target.name
    const file = event.target.files[0];
    if(name === 'personalpicture'){
      setNamePersonalPicture(file.name)
    }else {
      setNameIdCard(file.name)
    }
    setUserData({ ...userData, [name]: file })
  }

  return (
    <div> 
        <div className="grid md:grid-cols-12 gap-5">
        <div className="md:col-span-9">
          <h1 className="pb-2">กรอกข้อมูลส่วนบุคคล</h1>
          <div className="border rounded-2xl pl-6 pr-6 pt-6 ">
            <div className="grid md:grid-cols-3 md:gap-x-10 ">
            <div className='flex flex-col py-2 z-50'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  required
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"   
                  type="text"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2 z-0'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">นามสกุล</label>
                <input
                  required
                  onChange={handleChange}
                  value={userData["surname"] || ""}
                  name="surname"   
                  type="text"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="เข็มกลัด" id="exampleInputSurName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-50 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">วันเกิด</label>
                <DatePicker className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" selected={userData['birthday']} placeholderText="00/00/0000" required onChange={(date)=> dateChanged(date, 'birthday')} />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">เพศ</label>
                <select onChange={handleChange}
                  value={userData["gender"] || ""} required id="exampleInputGender" name='gender' type='text'  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option disabled={true} value="">
                          ไม่ระบุ
                        </option>
                        <option>ชาย</option>
                        <option>หญิง</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">อีเมล</label>
                <input
                  onChange={handleChange}
                  required
                  value={userData["email"] || ""}
                  name="email"
                  type="email"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="example@gmail.com" id="exampleInputEmail"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">อายุ</label>
                <input
                  onChange={handleChange}
                  required
                  value={userData["age"] || ""}
                  name="age"
                  type="number"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="20" id="exampleInputAge"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">เลขบัตรประชาชน</label>
                <input
                  required
                  onChange={handleChange}
                  value={userData["cardNumber"] || ""}
                  name="cardNumber"
                  type="text"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="0-0000-0000-00-0" id="exampleInputcardNumber"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-40 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">วันที่ออกบัตร</label>
                <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['cardIssueDate']} placeholderText="00/00/0000"  onChange={(date)=> dateChanged(date, 'cardIssueDate')} />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-30 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">วันหมดอายุบัตร</label>
                <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['cardExpireDate']} placeholderText="00/00/0000"  onChange={(date)=> dateChanged(date, 'cardExpireDate')} />
              </div>
            </div> 
            </div>
            <div className=" grid md:grid-cols-4 md:gap-x-10 pl-6 pr-6 pt-2 pb-6 ">
              <div className='flex flex-col py-2 text-center'>
                <div className="relative z-0 w-full group">
                  <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">รูปตัวเองด้านหน้า</label>
                  <div className="flex justify-center items-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col justify-center items-center pt-8 pb-4 pl-2 pr-2">
                          {userData['personalpicture'] === undefined?
                              <>
                                <img className='w-12 h-12 object-cover absolute mb-20 z-0' src={profile} alt="" />
                                <FaCloudUploadAlt className="mb-2 mt-4 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">คลิกเพื่ออัพโหลด</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">รูปภาพตัวเองหน้าตรง</p>
                              </>
                                :
                              <>
                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{namePersonalPicture}</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">คลิกเพื่ออัพโหลดรูปอีกครั้ง</p>
                              </>
                            }
                          </div>
                          <input id="dropzone-file" name="personalpicture" className="hidden" type="file" accept="image/*" onChange={onSelectFile}/>
                      </label>
                  </div> 
                  {isMessageErrorPersonalPicture === true?
                              <>
                                <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">โปรดคลิกเพื่ออัพโหลดรูปภาพตัวเอง</label>
                              </>
                              :
                              <>
                              </>
                  }
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                  <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">คำแนะนำรูป</label>
                  <h5 className="text-xs text-gray-500">ไม่สวมหมวก แว่นกันแดด<br/>หรือเครื่องประดับอื่นๆที่บดบังใบหน้า<br/>เป็นรูปสีไม่เกิน 6 เดือน</h5>
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group text-center">
                  <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">รูปบัตรประชาชน</label>
                  <div className="flex justify-center items-center w-full" >
                      <label htmlFor="dropzone-file-2" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                          <div className="flex flex-col justify-center items-center pt-6 pb-2 pl-2 pr-2 ">
                          {userData['idcard'] === undefined?
                              <>
                                <img className='w-14 h-14 object-cover absolute mb-24 z-0' src={idcard} alt="" />
                                <FaCloudUploadAlt className="mb-2 mt-2 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">คลิกเพื่ออัพโหลด</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">รูปภาพบัตรประชน<br/>(ด้านหน้า)</p>
                              </>
                                :
                              <>
                                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{nameIdCard}</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">คลิกเพื่ออัพโหลดรูปอีกครั้ง</p>
                              </>
                            }
                            
                          </div>
                          <input id="dropzone-file-2" className="hidden form-control" name="idcard" type="file" accept="image/*" onChange={onSelectFile}/>
                      </label>
                  </div>
                  {isMessageErrorIdCard === true?
                              <>
                                <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">โปรดคลิกเพื่ออัพโหลดรูปภาพบัตรประชน</label>
                              </>
                              :
                              <>
                              </>
                  }
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                  <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">คำแนะนำรูป</label>
                  <h5 className="text-xs text-gray-500">ภาพถ่ายด้านหน้าบัตรประชาชน<br/>ตัวอักษรชัดเจน ไม่มีเงาสะท้อน</h5>
                </div>
              </div>
            </div>  
          </div>
      </div>
      <div className="md:col-span-3 ">
      <h1 className="pb-2">กรอกข้อมูลผู้ที่เกี่ยวข้อง</h1>
        <div className="border rounded-2xl pl-6 pr-6 pt-6 pb-14 mb-14">
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
              <input
                onChange={handleChange}
                required
                value={userData["namerelevant"] || ""}
                name="namerelevant"
                type="text"  
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="นายสมชาย" id="exampleInputNamerelevant"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">นามสกุล</label>
              <input
                onChange={handleChange}
                required
                value={userData["surnamerelevant"] || ""}
                name="surnamerelevant"
                type="text"  
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="เข็มกลัด" id="exampleInputSurnamerelevant"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ความสัมพันธ์</label>
                <input
                  onChange={handleChange}
                  required
                  value={userData["relationship"] || ""}
                  name="relationship"
                  type="text"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="บิดา" id="exampleInputRelationship"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">เบอร์โทรศัพท์</label>
                <input
                  onChange={handleChange}
                  required
                  value={userData["phonerelevant"] || ""}
                  name="phonerelevant"
                  type="text"  
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="000-000-0000" id="exampleInputPhonerelevant"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
      
   </div>

   
     
  );
}