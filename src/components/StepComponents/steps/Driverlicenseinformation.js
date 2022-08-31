import { useState } from "react";
import { useStepperContext } from "../../../context/UserContext";
import { FaCloudUploadAlt } from 'react-icons/fa'

import DatePicker from "react-datepicker";

import * as constant from '../../../constant/content'

import driverlicence from '../../../assets/driverlicence.png'
import criminalhistory from '../../../assets/criminalhistory.png'

export default function Driverlicenseinformation({isMessageErrorDriverLicensePicture,isMessageErrorDocumentDriverLicensePicture,isResponseError,isMessageErrorTypeDriverLicense,isMessageErrorSmartcardDriverLicense}) {
 
  const { userData, setUserData } = useStepperContext();
  const [ typeLicense, setTypeLicense ] = useState(false);
  const [ namedriverlicensePicture , setNamedDriverlicensePicture] = useState(null);
  const [ namedocumentdriverlicensePicture , setNamedDocumentdriverlicenPicture] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const dateChanged = (date, name) => {
    setUserData({ ...userData, [name]: date});
  }

  const onSelectFile = async (event) => {
    const name = event.target.name
    const file = event.target.files[0];
    if(name === 'driverlicensephoto'){
      setNamedDriverlicensePicture(file.name)
    }else {
      setNamedDocumentdriverlicenPicture(file.name)
    }
    setUserData({ ...userData, [name]: file })
  }

  const formChange = async (event) => {
    const value = event.target.value
    setTypeLicense(value)
    setUserData({ ...userData, "typedriverlicense": value });
  }

  const smartcardChange = async (event) => {
    const value = event.target.value
    if(value === 'yes'){
      setUserData({ ...userData, "issmartcarddriverlicense": true });
    }else{
      setUserData({ ...userData, "issmartcarddriverlicense": false });
    }
  }

  return (
    <div> 
      <div className="grid md:grid-cols-12 gap-5 pb-5">
      <div className="md:col-span-12">
        <h1 className="pb-2">{constant.DriverLicenseInformationContent.title}</h1>
        <div className="border rounded-2xl pl-6 pr-6 pt-6 ">
          <div className="grid md:gap-x-10 ">
          <div className='flex flex-col py-2 z-50'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-base text-gray-600 py-4">{constant.DriverLicenseInformationContent.description}</label>
                
                <div className="flex py-8">
                    <div className="flex items-center h-5">
                      <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 form-radio" name="list-radio" value="normal" onChange={formChange}/>
                    </div>
                    <div className="ml-2 text-sm">
                      <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">{constant.DriverLicenseInformationContent.label.normaldriverlicense.title}</label>
                      <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">{constant.DriverLicenseInformationContent.label.normaldriverlicense.description}</p>
                    </div>
                </div>
                {typeLicense === 'normal'?
                  <>
                     <div className="grid md:grid-cols-12 gap-5">
                      <div className="md:col-span-6">
                        <div className="rounded-2xl pl-6 pr-6 pt-6 ">
                          <div className="grid md:grid-cols-2 md:gap-x-10 ">
                          <div className='flex flex-col py-2 z-0'>
                            <div className="relative z-0 mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.normaldriverlicense.label.numberdriverlicense}</label>
                              <input
                                required
                                onChange={handleChange}
                                value={userData["numberdriverlicense"] || ""}
                                name="numberdriverlicense"   
                                type="text"  
                                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder={constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.numberdriverlicense} id="exampleInputNumberdriverlicense"
                              />
                            </div>
                          </div>
                          <div className='flex flex-col py-2 z-0'>
                            <div className="relative z-0 mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.normaldriverlicense.label.typedriverlicense}</label>
                              <select onChange={handleChange}
                                value={userData["typecardriverlicense"] || ""} required id="exampleInputTypedriverlicense" name='typecardriverlicense' type='text'  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                      <option disabled={true} value="">
                                      {constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[0]}
                                      </option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[1]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[2]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[3]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[4]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[5]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[6]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[7]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[8]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.typedriverlicense[9]}</option>
                              </select>
                            </div>
                          </div>
                          <div className='flex flex-col py-2 z-20'>
                            <div className="relative mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.normaldriverlicense.label.issuedatedriverlicense}</label>
                              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['driverlicenseIssueDate']} placeholderText={constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.issuedatedriverlicense}  onChange={(date)=> dateChanged(date, 'driverlicenseIssueDate')} />
                            </div>
                          </div>
                          <div className='flex flex-col py-2 z-15'>
                            <div className="relative mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.normaldriverlicense.label.expiredatedriverlicense}</label>
                              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['driverlicenseExpireDate']} placeholderText={constant.DriverLicenseInformationContent.placeholder.normaldriverlicense.expiredatedriverlicense}   onChange={(date)=> dateChanged(date, 'driverlicenseExpireDate')} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6 ">
                    <div className=" grid md:grid-cols-2 md:gap-x-0 pl-6 pr-6 md:pt-2 pb-0">
                      <div className='flex flex-col py-2 text-center'>
                        <div className="relative z-0 w-full group">
                          <div className="flex justify-center items-center w-full" >
                            <label htmlFor="dropzone-file-2" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                                <div className="flex flex-col justify-center items-center pt-6 pb-2 pl-2 pr-2 ">
                                {userData['driverlicensephoto'] === undefined?
                                  <>
                                    <img className='w-16 h-18 absolute mb-24 z-0' src={driverlicence} alt="" />
                                    <FaCloudUploadAlt className="mb-2 mt-2 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                                    <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.DriverLicenseInformationContent.label.driverlicencepicture.buttonclick}</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{constant.DriverLicenseInformationContent.label.driverlicencepicture.title}<br/>{constant.DriverLicenseInformationContent.label.driverlicencepicture.subtitle}</p>
                                  </>
                                    : 
                                  <>
                                    <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{namedriverlicensePicture}</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{constant.DriverLicenseInformationContent.label.driverlicencepicture.buttonclickagain}</p>
                                  </>
                                  }
                                </div>
                                <input id="dropzone-file-2" className="hidden form-control" name="driverlicensephoto" type="file" accept="image/*" onChange={onSelectFile}/>
                            </label>
                           </div>
                           {isMessageErrorDriverLicensePicture === true?
                            <>
                              <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.DriverLicenseInformationContent.label.driverlicencepicture.errormessage}</label>
                            </>
                            :
                            <>
                            </>
                          }
                        </div>
                      </div>
                      <div className='flex flex-col py-2'>
                        <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                          <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.DriverLicenseInformationContent.label.driverlicencepicturesuggest.bodysuggest.title}</label>
                          <h5 className="text-xs text-gray-500">{constant.DriverLicenseInformationContent.label.driverlicencepicturesuggest.bodysuggest[0]}<br/>{constant.DriverLicenseInformationContent.label.driverlicencepicturesuggest.bodysuggest[1]}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </>
                   :
                  <>
                  
                                
                  </>
                }  
                <div className="flex py-8">
                    <div className="flex items-center h-5">
                      <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 form-radio" name="list-radio" value="special" onChange={formChange}/>
                    </div>
                    <div className="ml-2 text-sm">
                      <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">{constant.DriverLicenseInformationContent.label.specialdriverlicense.title}</label>
                      <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">{constant.DriverLicenseInformationContent.label.specialdriverlicense.description}</p>
                    </div>
                </div>
                {typeLicense === 'special'?
                  <>
                     <div className="grid md:grid-cols-12 gap-5">
                      <div className="md:col-span-6">
                        <div className="rounded-2xl pl-6 pr-6 pt-6 ">
                          <div className="grid md:grid-cols-2 md:gap-x-10 ">
                          <div className='flex flex-col py-2 z-0'>
                            <div className="relative z-0 mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.specialdriverlicense.label.numberdriverlicense}</label>
                              <input
                                required
                                onChange={handleChange}
                                value={userData["numberdriverlicense"] || ""}
                                name="numberdriverlicense"   
                                type="text"  
                                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder={constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.numberdriverlicense} id="exampleInputNumberdriverlicense"
                              />
                            </div>
                          </div>
                          <div className='flex flex-col py-2 z-0'>
                            <div className="relative z-0 mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.specialdriverlicense.label.typedriverlicense}</label>
                              <select onChange={handleChange}
                                value={userData["typecardriverlicense"] || ""} required id="exampleInputTypedriverlicense" name='typecardriverlicense' type='text'  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                      <option disabled={true} value="">
                                      {constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[0]}
                                      </option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[1]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[2]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[3]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[4]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[5]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[6]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[7]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[8]}</option>
                                      <option>{constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.typedriverlicense[9]}</option>
                              </select>
                            </div>
                          </div>
                          <div className='flex flex-col py-2 z-40'>
                            <div className="relative z-0 mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.specialdriverlicense.label.issuedatedriverlicense}</label>
                              <DatePicker required className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  selected={userData['driverlicenseIssueDate']} placeholderText={constant.DriverLicenseInformationContent.placeholder.specialdriverlicense.issuedatedriverlicense}  onChange={(date)=> dateChanged(date, 'driverlicenseIssueDate')} />
                            </div>
                          </div>
                          <div className='flex flex-col py-2 z-0'>
                            <div className="relative z-0 mb-6 w-full group">
                              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.DriverLicenseInformationContent.label.specialdriverlicense.label.issmartcarddriverlicense.title}</label>
                              <div className="flex pl-3 pt-3">
                                  <div className="flex items-center h-5">
                                    <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 form-radio" name="list-radio-1" value="yes" onChange={smartcardChange}/>
                                  </div>
                                  <div className="ml-2 text-xs pt-1">
                                    <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">{constant.DriverLicenseInformationContent.label.specialdriverlicense.label.issmartcarddriverlicense.yes}</label>
                                  </div>
                              </div>
                              <div className="flex pl-3 pt-3">
                                  <div className="flex items-center h-5">
                                    <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 form-radio" name="list-radio-1" value="no" onChange={smartcardChange}/>
                                  </div>
                                  <div className="ml-2 text-xs pt-1">
                                    <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">{constant.DriverLicenseInformationContent.label.specialdriverlicense.label.issmartcarddriverlicense.no}</label>
                                  </div>
                              </div>
                              {isMessageErrorSmartcardDriverLicense === true?
                                <>
                                  <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.DriverLicenseInformationContent.messagesmartcarderror}</label>
                                </>
                                :
                                <>
                                </>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6 ">
                    <div className=" grid md:grid-cols-2 md:gap-x-0 pl-6 pr-6 pb-0">
                      <div className='flex flex-col py-2 text-center'>
                        <div className="relative z-0 w-full group">
                          <div className="flex justify-center items-center w-full" >
                            <label htmlFor="dropzone-file-1" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                                <div className="flex flex-col justify-center items-center pt-6 pb-2 pl-2 pr-2 ">
                                {userData['driverlicensephoto'] === undefined?
                                     <>
                                     <img className='w-16 h-18 absolute mb-24 z-0' src={driverlicence} alt="" />
                                     <FaCloudUploadAlt className="mb-2 mt-2 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                                     <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.DriverLicenseInformationContent.label.driverlicencepicture.buttonclick}</span></p>
                                     <p className="text-xs text-gray-500 dark:text-gray-400">{constant.DriverLicenseInformationContent.label.driverlicencepicture.title}<br/>{constant.DriverLicenseInformationContent.label.driverlicencepicture.subtitle}</p>
                                   </>
                                     : 
                                   <>
                                     <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{namedriverlicensePicture}</span></p>
                                     <p className="text-xs text-gray-500 dark:text-gray-400">{constant.DriverLicenseInformationContent.label.driverlicencepicture.buttonclickagain}</p>
                                   </>
                                    
                                  }
                                </div>
                                <input id="dropzone-file-1" className="hidden form-control" name="driverlicensephoto" type="file" accept="image/*" onChange={onSelectFile}/>
                            </label>
                           </div>
                           {isMessageErrorDriverLicensePicture === true?
                            <>
                              <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.DriverLicenseInformationContent.label.driverlicencepicture.errormessage}</label>
                            </>
                            :
                            <>
                            </>
                          }
                        </div>
                      </div>
                      <div className='flex flex-col py-2'>
                        <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                          <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.DriverLicenseInformationContent.label.driverlicencepicturesuggest.title}</label>
                          <h5 className="text-xs text-gray-500">{constant.DriverLicenseInformationContent.label.driverlicencepicturesuggest.bodysuggest[0]}<br/>{constant.DriverLicenseInformationContent.label.driverlicencepicturesuggest.bodysuggest[1]}</h5>
                        </div>
                      </div>
                      <div className='flex flex-col py-2 text-center'>
                        <div className="relative z-0 w-full group">
                          <div className="flex justify-center items-center w-full" >
                            <label htmlFor="dropzone-file-2" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                                <div className="flex flex-col justify-center items-center pt-6 pb-2 pl-2 pr-2 ">
                                {userData['documentdriverlicensephoto'] === undefined?
                                    <>
                                      <img className='w-12 h-12 absolute mb-24 z-0' src={criminalhistory} alt="" />
                                      <FaCloudUploadAlt className="mb-2 mt-2 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                                      <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.DriverLicenseInformationContent.label.documentdriverlicencepicture.buttonclick}</span></p>
                                      <p className="text-xs text-gray-500 dark:text-gray-400">{constant.DriverLicenseInformationContent.label.documentdriverlicencepicture.title}</p>
                                    </>
                                      :
                                    <>
                                      <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{namedocumentdriverlicensePicture}</span></p>
                                      <p className="text-xs text-gray-500 dark:text-gray-400">{constant.DriverLicenseInformationContent.label.documentdriverlicencepicture.buttonclickagain}</p>
                                    </>                      
                                  }
                                </div>
                                <input id="dropzone-file-2" className="hidden form-control" name="documentdriverlicensephoto" type="file" accept="image/*" onChange={onSelectFile}/>
                            </label>
                           </div>
                           {isMessageErrorDocumentDriverLicensePicture === true?
                            <>
                              <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.DriverLicenseInformationContent.label.documentdriverlicencepicture.errormessage}</label>
                            </>
                            :
                            <>
                            </>
                          }
                        </div>
                      </div>
                      <div className='flex flex-col py-2'>
                        <div className="relative z-0 w-full group text-center suggesstion-box pt-8">
                          <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.DriverLicenseInformationContent.label.documentdriverlicencepicturesuggest.title}</label>
                          <h5 className="text-xs text-gray-500">{constant.DriverLicenseInformationContent.label.documentdriverlicencepicturesuggest.bodysuggest[0]}<br/>{constant.DriverLicenseInformationContent.label.documentdriverlicencepicturesuggest.bodysuggest[1]}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </>
                  :
                  <>
                  </>
                }
              </div>
            </div>
          </div>
        
        </div>
    </div>

    </div>
    {isResponseError === true?
      <>
        <div className="md:col-span-12 text-center mt-0">
          <h1 className="text-red-500">{constant.DriverLicenseInformationContent.messegeerror}</h1>
        </div>
      </>
        :
      <>
      </>
    }
    {isMessageErrorTypeDriverLicense === true?
      <>
        <div className="md:col-span-12 text-center mt-0 mb-4">
          <h1 className="text-red-500">{constant.DriverLicenseInformationContent.messagetypeerror}</h1>
        </div>
      </>
        :
      <>
      </>
    }
  </div>
  );
}