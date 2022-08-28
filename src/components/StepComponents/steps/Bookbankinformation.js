import { useState } from "react";
import { useStepperContext } from "../../../context/UserContext";
import { FaCloudUploadAlt } from 'react-icons/fa'

import * as constant from '../../../constant/content'

import bookbank from '../../../assets/bookbank.png'
import criminalhistory from '../../../assets/criminalhistory.png'

export default function Bookbank({isMessageErrorBookbankPicture,isMessageErrorCriminalHistoryPicture,isResponseError}) {
  const { userData, setUserData } = useStepperContext();
  const [ namebookbankphoto , setNameBookbankphoto] = useState(null);
  const [ namecriminalhistoryphoto , setNameCriminalhistoryphoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSelectFile = async (event) => {
    const name = event.target.name
    const file = event.target.files[0];
    if(name === 'bookbankphoto'){
      setNameBookbankphoto(file.name)
    }else {
      setNameCriminalhistoryphoto(file.name)
    }
    setUserData({ ...userData, [name]: file })
  }

  return (
    <div> 
    <div className="grid md:grid-cols-12 gap-5">
    <div className="md:col-span-9">
      <h1 className="pb-2">{constant.BookbankInformationContent.title}</h1>
      <div className="border rounded-2xl pl-6 pr-6 pt-6 ">
        <div className="grid md:grid-cols-2 md:gap-x-10 ">
        <div className='flex flex-col py-2 z-50'>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.BookbankInformationContent.label.name}</label>
            <input
              required
              onChange={handleChange}
              value={userData["namebookbank"] || ""}
              name="namebookbank"   
              type="text"  
              className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={constant.BookbankInformationContent.placeholder.name} id="exampleInputNamebookbank"
            />
          </div>
        </div>
        <div className='flex flex-col py-2 z-0'>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.BookbankInformationContent.label.surname}</label>
            <input
              required
              onChange={handleChange}
              value={userData["surnamebookbank"] || ""}
              name="surnamebookbank"   
              type="text"  
              className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={constant.BookbankInformationContent.placeholder.surname} id="exampleInputSurNamebookbank"
            />
          </div>
        </div>
       
        <div className='flex flex-col py-2'>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.BookbankInformationContent.label.idbookbank}</label>
            <input
              onChange={handleChange}
              required
              value={userData["idbookbank"] || ""}
              name="idbookbank"
              type="text"  
              className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={constant.BookbankInformationContent.placeholder.idbookbank} id="exampleInputIdbookbank"
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.BookbankInformationContent.label.namebookbank}</label>
            <input
              onChange={handleChange}
              required
              value={userData["namebank"] || ""}
              name="namebank"
              type="text"  
              className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={constant.BookbankInformationContent.placeholder.namebookbank} id="exampleInputNamebank"
            />
          </div>
        </div>
        </div>
        <div className=" grid md:grid-cols-2 md:gap-x-0 pl-6 pr-6 pt-2 pb-6 ">
          <div className='flex flex-col py-2 text-center'>
            <div className="relative z-0 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm">{constant.BookbankInformationContent.label.bookbankpicture.title}</label>
              <div className="flex justify-center items-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col justify-center items-center pt-8 pb-4 pl-2 pr-2">
                      {userData['bookbankphoto'] === undefined?
                        <>
                          <img className='w-14 h-14 object-cover absolute mb-20 z-0' src={bookbank} alt="" />
                          <FaCloudUploadAlt className="mb-2 mt-4 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                          <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.BookbankInformationContent.label.bookbankpicture.buttonclick}</span></p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{constant.BookbankInformationContent.label.bookbankpicture.title}</p>
                        </>
                        :
                        <>
                          <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{namebookbankphoto}</span></p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{constant.BookbankInformationContent.label.bookbankpicture.buttonclickagain}</p>
                        </>
                        }
                      </div>
                      <input id="dropzone-file" name="bookbankphoto" className="hidden" type="file" accept="image/*" onChange={onSelectFile}/>
                  </label>
              </div> 
              {isMessageErrorBookbankPicture === true?
                <>
                  <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.BookbankInformationContent.label.bookbankpicture.errormessage}</label>
                </>
                :
                <>
                </>
              }
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 w-full group text-center suggesstion-box pt-12">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.BookbankInformationContent.label.bookbankpicturesuggest.title}</label>
              <h5 className="text-xs text-gray-500">{constant.BookbankInformationContent.label.bookbankpicturesuggest.bodysuggest[0]}<br/>{constant.BookbankInformationContent.label.bookbankpicturesuggest.bodysuggest[1]}</h5>
            </div>
          </div>
        </div>  
      </div>
  </div>
  <div className="md:col-span-3 ">
  <h1 className="pb-2">{constant.BookbankInformationContent.label.criminalhistorypicture.title}</h1>
    <div className="border rounded-2xl pl-6 pr-6 pt-12 pb-14 mb-14">
      <div className=" grid md:grid-cols-0 md:gap-x-0 pl-6 pr-6 pt-2 pb-0 ">
          <div className='flex flex-col py-2 text-center'>
            <div className="relative z-0 w-full group">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 pb-4 text-sm">{constant.BookbankInformationContent.label.criminalhistorypicture.title}</label>
              <div className="flex justify-center items-center w-full">
                  <label htmlFor="dropzone-file-2" className="flex flex-col justify-center items-center w-40 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col justify-center items-center pt-8 pb-4 pl-2 pr-2">
                      {userData['criminalhistoryphoto'] === undefined?
                          <>
                            <img className='w-14 h-14 object-cover absolute mb-20 z-0' src={criminalhistory} alt="" />
                            <FaCloudUploadAlt className="mb-2 mt-4 w-8 h-8 text-gray-600 z-20"></FaCloudUploadAlt>
                            <p className="mb-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">{constant.BookbankInformationContent.label.criminalhistorypicture.buttonclick}</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{constant.BookbankInformationContent.label.criminalhistorypicture.title}</p>
                          </>
                            :
                          <>
                            <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 break-all"><span className="font-semibold ">{namecriminalhistoryphoto}</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{constant.BookbankInformationContent.label.criminalhistorypicture.buttonclickagain}</p>
                          </>
                        }
                      </div>
                      <input id="dropzone-file-2" name="criminalhistoryphoto" className="hidden" type="file" accept="image/*" onChange={onSelectFile}/>
                  </label>
              </div> 
              {isMessageErrorCriminalHistoryPicture === true?
              <>
                <label htmlFor="exampleFormControlInput" className="pl-2 pt-4 text-xs text-red-500">{constant.BookbankInformationContent.label.criminalhistorypicture.errormessage}</label>
              </>
              :
              <>
              </>
              }
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 w-full group text-center suggesstion-box pt-10">
              <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 pl-2 text-sm font-bold">{constant.BookbankInformationContent.label.criminalhistorypicturesuggest.title}</label>
              <h5 className="text-xs text-gray-500">{constant.BookbankInformationContent.label.criminalhistorypicturesuggest.bodysuggest[0]}<br/>{constant.BookbankInformationContent.label.criminalhistorypicturesuggest.bodysuggest[1]}</h5>
            </div>
          </div>
        </div>  
    </div> 
  </div>
  </div>
  {isResponseError === true?
    <>
      <div className="md:col-span-12 text-center mt-8">
        <h1 className="text-red-500">{constant.BookbankInformationContent.messegeerror}</h1>
      </div>
    </>
      :
    <>
    </>
  }
</div>


  );
}