import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => { 
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = steps;
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          // title
          completed: false,
          // line
          highlighted: index === 0 ? true : false,
          // highlight title
          selected: index === 0 ? true : false,
          // background number circle
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-white">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  bg-green-700 ${
              step.selected
                ? "bg-white text-black font-bold border border-gray-600 "
                : ""
            }`}
          >
            {step.completed ? (
              <div>
                <span className="text-black font-bold text-2xs">{index + 1}</span>
                <div
                  className={`absolute top-0 -right-10 text-center mt-16 ml-0 w-32 text-xs font-medium ${
                    step.highlighted ? "text-white" : "text-green-600"
                  }`}
                >
                  {step.description}
                </div>
              </div>
              
            ) : (
              index + 1
            )}
          </div>
         
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? "border-white-600" : "border-gray-300 "
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;