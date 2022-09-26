import { useState } from "react";
import { useStepperContext } from "../../../context/UserContext";
import { FaCloudUploadAlt } from 'react-icons/fa'

import DatePicker from "react-datepicker";
import * as constant from '../../../constant/content'

import documenticon from '../../../assets/criminalhistory.png'
import "react-datepicker/dist/react-datepicker.css";

export default function Carinformation({isMessageErrorCarLicensePicture,isMessageErrorTaxPicture,isResponseError}) {

  const { userData, setUserData } = useStepperContext();
  const [ nameLicensePicture , setNameLicensePicture] = useState(null);
  const [ nameTaxPicture , setNameTaxPicture] = useState(null);

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
    if(name === 'carlicencepicture'){
      setNameLicensePicture(file.name)
    }else {
      setNameTaxPicture(file.name)
    }
    setUserData({ ...userData, [name]: file })
  }

  return (
    <div> 
    <div className="grid md:grid-cols-12 gap-5">
      <div className="md:col-span-12">
        <h1 className="pb-2">{constant.CarInformationContent.title}</h1>
        <div className="border rounded-2xl pl-6 pr-6 pt-6 ">
          <div className="grid md:grid-cols-3 md:gap-x-10 ">
          <div className='flex flex-col py-2 z-50'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.typecar}</label>
              <select onChange={handleChange}
                  value={userData["cartype"] || ""} required id="exampleInputCartype" name='cartype' type='text'  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      {constant.optionstypecar.map((option) => (
                        <option disabled={option.disable} key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col py-2 z-0'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.numbercar}</label>
              <input
                required
                onChange={handleChange}
                value={userData["carnumber"] || ""}
                name="carnumber"   
                type="text"  
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={constant.CarInformationContent.placeholder.numbercar} id="exampleInputcarNumber"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-50 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.typeofcarsign}</label>
              <select onChange={handleChange}
                  value={userData["typeofcarsign"] || ""} required id="exampleInputGender" name='typeofcarsign' type='text'  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      {constant.optionstypesigncar.map((option) => (
                        <option disabled={option.disable} key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.countryofsigncar}</label>
              <select onChange={handleChange}
                  value={userData["carcountry"] || ""} required id="exampleInputcarCountry" name='carcountry' type='text'  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      {constant.optionscountry.map((option) => (
                        <option disabled={option.disable} key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.brand}</label>
              <input
                onChange={handleChange}
                required
                value={userData["brand"] || ""}
                name="brand"
                type="text"  
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={constant.CarInformationContent.placeholder.brand} id="exampleInputBrand"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.color}</label>
              <input
                onChange={handleChange}
                required
                value={userData["color"] || ""}
                name="color"
                type="text"  
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={constant.CarInformationContent.placeholder.color} id="exampleInputColor"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative mb-6 w-full group z-auto">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.licenseissuedate}</label>
              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" selected={userData['licenseissuedate']} placeholderText={constant.CarInformationContent.placeholder.licenseissuedate}  onChange={(date)=> dateChanged(date, 'licenseissuedate')} />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-auto mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.licenseexpiredate}</label>
              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['licenseexpiredate']} placeholderText={constant.CarInformationContent.placeholder.licenseexpiredate}  onChange={(date)=> dateChanged(date, 'licenseexpiredate')} />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-auto mb-6 w-full group">
              <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.licensename}</label>
              <input
                onChange={handleChange}
                required
                value={userData["licensename"] || ""}
                name="licensename"
                type="text"  
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={constant.CarInformationContent.placeholder.licensename} id="exampleInputLicensename"
              />
            </div>
          </div> 
          <div className='flex flex-col py-2'>
            <div className="relative z-auto mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.taxissuedate}</label>
              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['taxissuedate']} placeholderText={constant.CarInformationContent.placeholder.taxissuedate}  onChange={(date)=> dateChanged(date, 'taxissuedate')} />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-auto mb-6 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.taxexpiredate}</label>
              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['taxexpiredate']} placeholderText={constant.CarInformationContent.placeholder.taxexpiredate}  onChange={(date)=> dateChanged(date, 'taxexpiredate')} />
            </div>
          </div>
          </div>
          <div className=" grid md:grid-cols-4 md:gap-x-10 pl-6 pr-6 pt-2 pb-4">
            <div className='flex flex-col py-2 text-center'>
              <div className="relative z-0 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.carlicencepicture.title}</label>
                <div className="flex justify-center items-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center pt-8 pb-4 pl-2 pr-2">
                        {userData['carlicencepicture'] === undefined?
                            <>
                              <img className='w-12 h-12 object-cover absolute mb-20 z-0' src={documenticon} alt="" />
                              <FaCloudUploadAlt className="mb-2 mt-4 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                              <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.CarInformationContent.label.carlicencepicture.buttonclick}</span></p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{constant.CarInformationContent.label.carlicencepicture.title}</p>
                            </>
                              :
                            <>
                              <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{nameLicensePicture}</span></p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{constant.CarInformationContent.label.carlicencepicture.buttonclickagain}</p>
                            </>
                          }
                        </div>
                        <input id="dropzone-file" name="carlicencepicture" className="hidden" type="file" accept="image/*" onChange={onSelectFile}/>
                    </label>
                </div> 
                {isMessageErrorCarLicensePicture === true?
                  <>
                    <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.CarInformationContent.label.carlicencepicture.errormessage}</label>
                  </>
                  :
                  <>
                  </>
                }
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.CarInformationContent.label.carlicencepicturesuggest.title}</label>
                <h5 className="text-xs text-gray-500">{constant.CarInformationContent.label.carlicencepicturesuggest.bodysuggest[0]}<br/>{constant.CarInformationContent.label.carlicencepicturesuggest.bodysuggest[1]}<br/>{constant.CarInformationContent.label.carlicencepicturesuggest.bodysuggest[2]}</h5>
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 w-full group text-center">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.CarInformationContent.label.taxpicture.title}</label>
                <div className="flex justify-center items-center w-full" >
                    <label htmlFor="dropzone-file-2" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                        <div className="flex flex-col justify-center items-center pt-6 pb-2 pl-2 pr-2 ">
                        {userData['taxpicture'] === undefined?
                            <>
                              <img className='w-12 h-12 object-cover absolute mb-20 z-0' src={documenticon} alt="" />
                              <FaCloudUploadAlt className="mb-2 mt-4 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                              <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.CarInformationContent.label.taxpicture.buttonclick}</span></p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{constant.CarInformationContent.label.taxpicture.title}</p>
                            </>
                              :
                            <>
                              <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{nameTaxPicture}</span></p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{constant.CarInformationContent.label.taxpicture.buttonclickagain}</p>
                            </>
                          }
                          
                        </div>
                        <input id="dropzone-file-2" className="hidden form-control" name="taxpicture" type="file" accept="image/*" onChange={onSelectFile}/>
                    </label>
                </div>
                {isMessageErrorTaxPicture === true?
                <>
                  <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.CarInformationContent.label.taxpicture.errormessage}</label>
                </>
                :
                <>
                </>
                }
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.CarInformationContent.label.carlicencepicturesuggest.title}</label>
                <h5 className="text-xs text-gray-500">{constant.CarInformationContent.label.carlicencepicturesuggest.bodysuggest[0]}<br/>{constant.CarInformationContent.label.carlicencepicturesuggest.bodysuggest[1]}<br/>{constant.CarInformationContent.label.carlicencepicturesuggest.bodysuggest[2]}</h5>
              </div>
            </div>
          </div>  
        </div>
    </div>

    </div>
    {isResponseError === true?
      <>
        <div className="md:col-span-12 text-center mt-8">
          <h1 className="text-red-500">{constant.CarInformationContent.messegeerror}</h1>
        </div>
      </>
        :
      <>
      </>
    }
 </div>
 
  
  );
}