
export default function StepperControl({ handleClick, currentStep, steps }) {
    return ( 
      <div className="grid md:grid-cols-12 -mt-14">
<<<<<<< HEAD
          <div className="md:col-span-6 flex md:pl-10 items-center md:justify-start">   
          {currentStep !== 1?
            <>
              <button
                onClick={() => handleClick()}
                className="cursor-pointer button-center rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-gray-700 hover:text-black"
                >
                Back
              </button>
            </>
             :
            null
          } 
=======
          <div className="md:col-span-6 flex md:pl-10 items-center md:justify-start ">
            {/* <button
              onClick={() => handleClick()}
              className={`cursor-pointer button-center rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-gray-700 hover:text-black  ${
                currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
              }`}
            >
              Back
            </button> */}
>>>>>>> dev
          </div>
          <div className="md:col-span-6 flex items-center justify-end md:pr-10">
            <button
              onClick={() => handleClick("next")}
              className="cursor-pointer rounded-lg button-center bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
<<<<<<< HEAD
              >
              {currentStep === steps.length - 1 ? "ยืนยัน" : "ถัดไป"}
=======
            >
              ยืนยัน
>>>>>>> dev
            </button>
          </div>
      </div>
    );
  }