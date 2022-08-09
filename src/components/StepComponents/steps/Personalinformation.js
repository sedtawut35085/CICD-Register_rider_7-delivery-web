import { useStepperContext } from "../../../context/UserContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div> 
        <div className="grid md:grid-cols-12 gap-5">
        <div className="md:col-span-9">
          <h1 className="pb-3">กรอกข้อมูลส่วนบุคคล</h1>
          <div className="border rounded-2xl pl-6 pr-6 pt-2 pb-6 ">
            <div className="grid md:grid-cols-3 md:gap-x-10 ">
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">นามสกุล</label>
                <input
                  onChange={handleChange}
                  value={userData["surname"] || ""}
                  name="surname"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="เข็มกลัด" id="exampleInputSurName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
              
            </div>
            <div className=" grid md:grid-cols-4 md:gap-x-10 pl-6 pr-6 pt-2 pb-6 ">
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group">
                  <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                  <input
                    onChange={handleChange}
                    value={userData["name"] || ""}
                    name="name"
                    type="text" required
                    className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="นายสมชาย" id="exampleInputName"
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group">
                  <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                  <input
                    onChange={handleChange}
                    value={userData["name"] || ""}
                    name="name"
                    type="text" required
                    className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="นายสมชาย" id="exampleInputName"
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group">
                  <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                  <input
                    onChange={handleChange}
                    value={userData["name"] || ""}
                    name="name"
                    type="text" required
                    className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="นายสมชาย" id="exampleInputName"
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <div className="relative z-0 w-full group">
                  <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                  <input
                    onChange={handleChange}
                    value={userData["name"] || ""}
                    name="name"
                    type="text" required
                    className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="นายสมชาย" id="exampleInputName"
                  />
                </div>
              </div>
            </div>  
          </div>
      </div>
      <div className="md:col-span-3 ">
      <h1 className="pb-3">กรอกข้อมูลผู้ที่เกี่ยวข้อง</h1>
        <div className="border rounded-2xl pl-6 pr-6 pt-6 pb-6 mb-10">
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
              <input
                onChange={handleChange}
                value={userData["name"] || ""}
                name="name"
                type="text" required
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="นายสมชาย" id="exampleInputName"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
              <input
                onChange={handleChange}
                value={userData["name"] || ""}
                name="name"
                type="text" required
                className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="นายสมชาย" id="exampleInputName"
              />
            </div>
          </div>
          <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">ชื่อ</label>
                <input
                  onChange={handleChange}
                  value={userData["name"] || ""}
                  name="name"
                  type="text" required
                  className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="นายสมชาย" id="exampleInputName"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
   </div>
     
  );
}