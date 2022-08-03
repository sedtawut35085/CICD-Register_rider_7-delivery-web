import { useStepperContext } from "../../../context/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData)

  return (
  
    <div className="-mt-5 -mb-8">
        
        <h1 className="">กรอกข้อมูลส่วนบุคคล</h1>
       
        
     
      </div>
     
  );
}