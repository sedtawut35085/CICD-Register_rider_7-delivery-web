import { useState , useContext } from "react";
import { useStepperContext } from "../../context/UserContext";
import { AuthContext } from '../../auth/Auth'
import { SavepersonalInformation , SaverelevantInformation } from '../SaveinformationComponent/index'

import Stepper from "../StepComponents/Stepper";
import Personalinformation from "../StepComponents/steps/Personalinformation";
import Bookbankinformation from "../StepComponents/steps/Bookbankinformation";
import Driverlicenseinformation from "../StepComponents/steps/Driverlicenseinformation";
import Carinformation from '../StepComponents/steps/Carinformation'
import Final from "../StepComponents/steps/Final";
import './style.css'

const InformationComponent = () => {

  const { userData } = useStepperContext();
  const { currentUser } = useContext(AuthContext);
  const [ currentStep , setCurrentStep] = useState(1);
  const [ isMessageErrorPersonalPicture , setIsMessageErrorPersonalPicture]  = useState(false);
  const [ isMessageErrorIdCard , setIsMessageErrorIdCard]  = useState(false);

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
        return <Personalinformation isMessageErrorPersonalPicture={isMessageErrorPersonalPicture} isMessageErrorIdCard={isMessageErrorIdCard}/>;
      case 2:
        return <Bookbankinformation />;
      case 3:
        return <Driverlicenseinformation />;
      case 4:
        return <Carinformation />;
    case 5:
        return <Final />;
      default:
    }
  };

  const Submit = async (e) => {
    e.preventDefault();
    let newStep = currentStep;
    newStep++;
    if(newStep > 0 && newStep <= steps.length){
      if(newStep === 2){
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
        if(userData['personalpicture'] !== undefined && userData['idcard'] !== undefined){
          let responsesavepersonalinformation = await SavepersonalInformation(userData , currentUser.username)
          let responsesaverelevantinformation = await SaverelevantInformation(userData , currentUser.username)
          if(responsesavepersonalinformation.data.Message === "SUCCESS" && responsesaverelevantinformation.data.Message === "SUCCESS"){
            setCurrentStep(newStep)
          }
        } 
      }
      if(newStep === 3){
        
      }
    }
  }
    

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2">
      <div>
        <div className="bg-green-600 pb-8 pt-6 md:pl-16 md:pr-16">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>  
      </div>
      <form onSubmit={Submit}>
        <div className="pl-10 pr-10 pb-10 pt-6 mb-8">
            {displayStep(currentStep)}
        </div>
        {currentStep !== steps.length && (
        <div className="grid md:grid-cols-12 -mt-14 button-responsive">
          <div className="md:col-span-6 flex md:pl-10 items-center md:justify-start "></div>
            <div className="md:col-span-6 flex items-center justify-end md:pr-10">
              <button type="submit"
                className="cursor-pointer rounded-lg button-center bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
              >
                ยืนยัน
              </button>
            </div>
        </div>
      
        )}
      </form>
    </div>
  )
}

export default InformationComponent;