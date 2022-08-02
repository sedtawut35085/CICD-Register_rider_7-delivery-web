


import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../../context/StepperContext";

import Personalinformation from "./steps/Personalinformation";
import Bookbankinformation from "./steps/Bookbankinformation";
import Driverlicenseinformation from "./steps/Driverlicenseinformation";
import Carinformation from './steps/Carinformation'
import Final from "./steps/Final";

function App() {
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
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2">
      {/* Stepper */}
      <div className="">
        
        

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      
    </div>
  );
}

export default App;