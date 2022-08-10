import { useState } from "react";
import { UseContextProvider } from "../../context/UserContext";

import Stepper from "../StepComponents/Stepper";
import StepperControl from "../StepComponents/StepperControl";
import Personalinformation from "../StepComponents/steps/Personalinformation";
import Bookbankinformation from "../StepComponents/steps/Bookbankinformation";
import Driverlicenseinformation from "../StepComponents/steps/Driverlicenseinformation";
import Carinformation from '../StepComponents/steps/Carinformation'
import Final from "../StepComponents/steps/Final";
import './style.css'

const InformationComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
        return <Personalinformation />;
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

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    if(newStep > 0 && newStep <= steps.length ){
      setCurrentStep(newStep)
    }
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2">
      <div className="">
        <div className="bg-green-600 pb-10 pt-8 md:pl-16 md:pr-16">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className="p-10">
          <UseContextProvider>
            {displayStep(currentStep)}
          </UseContextProvider>
        </div>
      </div>
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick} 
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  )
}

export default InformationComponent;