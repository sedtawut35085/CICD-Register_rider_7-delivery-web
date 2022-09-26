import { useState , useContext } from "react";
import { useStepperContext } from "../../context/UserContext";
import { AuthContext } from '../../auth/Auth'
import { SavepersonalInformation, SaverelevantInformation, SavebookbankInformation, SavecriminalhistoryInformation, SavedriverlicenseInformation, SavecarInformation} from '../SaveinformationComponent/index'

import RingLoader from "react-spinners/RingLoader";
import { useLocation } from "react-router-dom";

import NavbarComponent from "../NavbarComponent";

import Stepper from "../StepComponents/Stepper";
import Personalinformation from "../StepComponents/steps/Personalinformation";
import Bookbankinformation from "../StepComponents/steps/Bookbankinformation";
import Driverlicenseinformation from "../StepComponents/steps/Driverlicenseinformation";
import Carinformation from '../StepComponents/steps/Carinformation'
import Final from "../StepComponents/steps/Final";
import './style.css'

const InformationComponent = () => {

  const { state } = useLocation();
  const { currentstep } = state || 1;
  const { userData } = useStepperContext();
  const { currentUser } = useContext(AuthContext);
  const [ currentStep , setCurrentStep] = useState(currentstep || 1);
  const [ loading , setLoading] = useState(false);
  const [ isMessageErrorPersonalPicture , setIsMessageErrorPersonalPicture]  = useState(false);
  const [ isMessageErrorIdCard , setIsMessageErrorIdCard]  = useState(false);
  const [ isMessageErrorBookbankPicture , setIsMessageErrorBookbankPicture]  = useState(false);
  const [ isMessageErrorCriminalHistoryPicture , setIsMessageErrorCriminalHistoryPicture ]  = useState(false);
  const [ isMessageErrorTypeDriverLicense , setIsMessageErrorTypeDriverLicense]  = useState(false);
  const [ isMessageErrorDriverLicensePicture , setIsMessageErrorDriverLicensePicture ]  = useState(false);
  const [ isMessageErrorDocumentDriverLicensePicture , setIsMessageErrorDocumentDriverLicensePicture ]  = useState(false);
  const [ isMessageErrorSmartcardDriverLicense , setIsMessageErrorSmartcardDriverLicense ]  = useState(false);
  const [ isMessageErrorCarLicensePicture , setIsMessageErrorCarLicensePicture ]  = useState(false);
  const [ isMessageErrorTaxPicture , setIsMessageErrorTaxPicture ]  = useState(false);
  const [ isErrorCardnumber, setIsErrorCardnumber] = useState(false);
  const [ isErrorPhonenumber, setIsErrorPhonenumber] = useState(false);
  const [ isErrorBookbanknumber, setIsErrorBookbanknumber] = useState(false);
  const [ isErrorDriverlicensenumber, setIsErrorDriverlicensenumber] = useState(false);
  const [ isResponseError , setIsResponseError ]  = useState(false);
  
  const steps = [
    "ข้อมูลส่วนบุคคล",
    "ข้อมูลบัญชีธนาคาร",
    "ข้อมูลใบขับขี่",
    "ข้อมูลรถ",
    "เสร็จสิ้น",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Personalinformation isMessageErrorPersonalPicture={isMessageErrorPersonalPicture} isMessageErrorIdCard={isMessageErrorIdCard} isResponseError={isResponseError} isErrorCardnumber={isErrorCardnumber} isErrorPhonenumber={isErrorPhonenumber}/>;
      case 2:
        return <Bookbankinformation isMessageErrorBookbankPicture={isMessageErrorBookbankPicture} isMessageErrorCriminalHistoryPicture={isMessageErrorCriminalHistoryPicture} isResponseError={isResponseError} isErrorBookbanknumber={isErrorBookbanknumber}/>;
      case 3:
        return <Driverlicenseinformation isMessageErrorDriverLicensePicture={isMessageErrorDriverLicensePicture} isMessageErrorDocumentDriverLicensePicture={isMessageErrorDocumentDriverLicensePicture} isResponseError={isResponseError} isMessageErrorTypeDriverLicense={isMessageErrorTypeDriverLicense} isMessageErrorSmartcardDriverLicense={isMessageErrorSmartcardDriverLicense} isErrorDriverlicensenumber={isErrorDriverlicensenumber}/>;
      case 4:
        return <Carinformation isMessageErrorCarLicensePicture={isMessageErrorCarLicensePicture} isMessageErrorTaxPicture={isMessageErrorTaxPicture} isResponseError={isResponseError} />;
    case 5:
        return <Final />;
      default:
    }
  };

  const Submit = async (e) => { 
    setLoading(false)
    e.preventDefault();
    let newStep = currentStep;
    newStep++;
    if(newStep > 0 && newStep <= steps.length){
      if(newStep === 2){
        const LengthcardnumberRegExp   = /(\d{1})-(\d{4})-(\d{5})-(\d{2})-(\d{1})/;
        const LengthphonenumberRegExp   = /(\d{3})-(\d{3})-(\d{4})/;
        let LengthcardNumber
        let LengthphoneNumber
        LengthcardNumber =   LengthcardnumberRegExp.test(userData['cardNumber']);
        LengthphoneNumber =   LengthphonenumberRegExp.test(userData['phonerelevant']);
        if(userData['personalpicture'] === undefined){
          setIsMessageErrorPersonalPicture(true)
        }else{
          setIsMessageErrorPersonalPicture(false)
        }
        if(userData['idcard'] === undefined){
          setIsMessageErrorIdCard(true)
        }else{
          setIsMessageErrorIdCard(false)
        } 
        if(!LengthcardNumber || userData['cardNumber'].length !== 17) {
          setIsErrorCardnumber(true)
        }else{
          setIsErrorCardnumber(false) 
        }  
        if(!LengthphoneNumber || userData['phonerelevant'].length !== 12) {
          setIsErrorPhonenumber(true)
        }else{
          setIsErrorPhonenumber(false) 
        }
        if(userData['personalpicture'] !== undefined && userData['idcard'] !== undefined && LengthcardNumber && LengthphoneNumber && userData['cardNumber'].length === 17 && userData['phonerelevant'].length === 12){
          setLoading(true)
          let responsesavepersonalinformation = await SavepersonalInformation(userData , currentUser.username)
          let responsesaverelevantinformation = await SaverelevantInformation(userData , currentUser.username)
          if(responsesavepersonalinformation.status === 200 && responsesaverelevantinformation.status === 200){
            setLoading(false)
            setCurrentStep(newStep)
          }else{
            setIsResponseError(true)
          }
        } 
      }
      else if(newStep === 3){
        const LengthbookbanknumberRegExp   = /(\d{3})-(\d{6})-(\d{1})/;
        let LengthbookbankNumber
        LengthbookbankNumber =   LengthbookbanknumberRegExp.test(userData['idbookbank']);
        if(userData['bookbankphoto'] === undefined){
          setIsMessageErrorBookbankPicture(true)
        }else{
          setIsMessageErrorBookbankPicture(false)
        }
        if(userData['criminalhistoryphoto'] === undefined){
          setIsMessageErrorCriminalHistoryPicture(true)
        }else{
          setIsMessageErrorCriminalHistoryPicture(false)
        }   
        if(!LengthbookbankNumber || userData['idbookbank'].length !== 12) {
          setIsErrorBookbanknumber(true)
        }else{
          setIsErrorBookbanknumber(false) 
        }
        if(userData['criminalhistoryphoto'] !== undefined && userData['bookbankphoto'] !== undefined && LengthbookbankNumber){
          setLoading(true)
          let responsesavebookbankinformation = await SavebookbankInformation(userData , currentUser.username)
          let responsesavecriminalhistoryinformation = await SavecriminalhistoryInformation(userData , currentUser.username)
          if(responsesavebookbankinformation.status === 200 && responsesavecriminalhistoryinformation.status === 200){
            setLoading(false)
            setCurrentStep(newStep)
          }else{
            setIsResponseError(true)
          }
        } 
      }
      else if(newStep === 4){     
        const LengthdriverlicenseRegExp   = /(\d{8})/;
        let Lengthdriverlicense
        Lengthdriverlicense =   LengthdriverlicenseRegExp.test(userData['numberdriverlicense']); 
        if(!Lengthdriverlicense || userData['numberdriverlicense'].length !== 8 ) {
          setIsErrorDriverlicensenumber(true)
        }else{
          setIsErrorDriverlicensenumber(false) 
        }
        if(userData['typedriverlicense'] === 'normal'){
          setIsMessageErrorTypeDriverLicense(false)
          if(userData['driverlicensephoto'] === undefined){
            setIsMessageErrorDriverLicensePicture(true)
          }else{
            setIsMessageErrorDriverLicensePicture(false)
          }
        }else if(userData['typedriverlicense'] === 'special'){
          setIsMessageErrorTypeDriverLicense(false)
          if(userData['driverlicensephoto'] === undefined){
            setIsMessageErrorDriverLicensePicture(true)
          }else{
            setIsMessageErrorDriverLicensePicture(false)
          }
          if(userData['documentdriverlicensephoto'] === undefined){
            setIsMessageErrorDocumentDriverLicensePicture(true)
          }else{
            setIsMessageErrorDocumentDriverLicensePicture(false)
          }
          if(userData['issmartcarddriverlicense'] === undefined){
            setIsMessageErrorSmartcardDriverLicense(true)
          }else{
            setIsMessageErrorSmartcardDriverLicense(false)
          }
        }else{
          setIsMessageErrorTypeDriverLicense(true)
        }
        if((userData['driverlicensephoto'] !== undefined && userData['documentdriverlicensephoto'] !== undefined && userData['typedriverlicense'] === 'special' && userData['issmartcarddriverlicense'] !== undefined && Lengthdriverlicense && userData['numberdriverlicense'].length === 8) || (userData['typedriverlicense'] === 'normal' && userData['driverlicensephoto'] !== undefined && Lengthdriverlicense && userData['numberdriverlicense'].length === 8)){
          setLoading(true)
          let responsesavesavedriverlicenseinformation = await SavedriverlicenseInformation(userData , currentUser.username)
          if(responsesavesavedriverlicenseinformation.status === 200 && responsesavesavedriverlicenseinformation.status === 200){
            setLoading(false)
            setCurrentStep(newStep)
          }else{
            setIsResponseError(true)
          }
        }
      }
      else if(newStep === 5){
        if(userData['carlicencepicture'] === undefined){
          setIsMessageErrorCarLicensePicture(true)
        }else{
          setIsMessageErrorCarLicensePicture(false)
        }
        if(userData['taxpicture'] === undefined){
          setIsMessageErrorTaxPicture(true)
        }else{
          setIsMessageErrorTaxPicture(false)
        }
        if(userData['carlicencepicture'] !== undefined && userData['taxpicture'] !== undefined){
          setLoading(true)
          let responseSavecarInformation = await SavecarInformation(userData , currentUser.username)
          if(responseSavecarInformation.status === 200){
            setLoading(false)
            setCurrentStep(newStep)
          }else{
            setIsResponseError(true) 
          }
        } 
      }else{
        setCurrentStep(newStep)
      }
    }
  }
    

  return (
    
    <div className="mx-auto rounded-2xl bg-white pb-2">
      <NavbarComponent />
      <div>
        <div className="bg-green-600 pb-8 pt-6 md:pl-16 md:pr-16">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>  
      </div>
      <form onSubmit={Submit}>
        <div className="pl-10 pr-10 pb-0 pt-6 mb-8">
            {displayStep(currentStep)}
        </div>
        {currentStep !== steps.length && (
        <div className="grid md:grid-cols-12 -mt-2 button-responsive">
          <div className="md:col-span-6 flex md:pl-10 items-center md:justify-start "></div>
            <div className="md:col-span-6 flex items-center justify-end md:pr-10">
            {loading === true?
              <> 
              <div className="loading-center py-2 px-4 flex">
                <RingLoader
                    size={25}
                    color={"#599c3d"}
                    loading={loading}
                  />
                  <div className="pl-6">
                    กำลังบันทึกข้อมูล
                  </div>
              </div>
              </>
              :
              <> 
                <button type="submit"
                  className="cursor-pointer rounded-lg button-center bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                >
                  ยืนยัน
                </button>
              </>
            }
              
            </div>
        </div>
      
        )}
      </form>
    </div>
  )
}

export default InformationComponent;