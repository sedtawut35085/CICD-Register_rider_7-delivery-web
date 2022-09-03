import documenticon from '../../../assets/finish.png'
import * as constant from '../../../constant/content'

export default function Final() {

    return (
      <div className="container md:mt-16 md:pt-16">
        <div className="flex flex-col items-center">
          <div className="text-center pt-6">
            <div className="flex flex-col justify-center items-center pb-10">
              <img className='w-20 h-20 object-cover' src={documenticon} alt="" />
            </div>
           
            <label htmlFor="exampleFormControlInput" className="form-label inline-blocktext-gray-700 text-xl font-bold">{constant.FinalContent.label}</label>
            <h5 className="text-xl text-gray-500">{constant.FinalContent.description}</h5>
          </div>
          {/* <button className="h-10 px-5 mt-4 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
              ปิด
          </button> */}    
        </div>
      </div>
    );
  }