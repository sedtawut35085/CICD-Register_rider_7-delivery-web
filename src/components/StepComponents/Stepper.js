const Stepper = ({ steps, currentStep }) => { 

  const stepsDisplay = steps.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== steps.length-1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-white">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  bg-green-700 ${
              index === currentStep - 1 || index < currentStep - 1
                ? "bg-white text-black font-bold border border-gray-600 "
                : ""
            }`}
          >
            {index === currentStep - 1 || index < currentStep - 1 ? (
              <div>
                <span className="text-black font-bold text-2xs">{index + 1}</span>
                <div
                  className={`absolute top-0 -right-10 text-center mt-16 ml-0 w-32 text-xs font-medium ${
                    index === currentStep - 1  ? "text-white" : "text-green-600"
                  }`}
                >
                  {step}
                </div>
              </div>
              
            ) : (
              index + 1
            )}
          </div>
         
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            ( index === currentStep - 1 || index < currentStep - 1 ) ? "border-white-600" : "border-gray-300"
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