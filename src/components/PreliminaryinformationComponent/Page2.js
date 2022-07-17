// import React, {useEffect} from 'react'
// import Auth from '../Login_components/configuration'
// import testImg from '../../assets/wallpaper-page-2-1.jpeg'

// const Page2 = () => {

//     useEffect( () => {
//         Auth.currentSession()
//         .then(data => {
//             console.log(data);
//             const token = data.getAccessToken();
//             console.log(token.getJwtToken());

//           //   console.log(parseJwt(token.getJwtToken()).username);      
//           })
//         .catch(err => console.log(err));
//     }, [])
//     return (  
//         <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
//         <div className='hidden sm:block bg-gray-100'>
//             <img className='w-59 h-59 object-cover photo  pt-14 mt-14' src={testImg} alt="" />
//         </div>
//         <div className='bg-white flex flex-col justify-center'>
//             <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8' >
//                 <h2 className='text-2xl font-bold text-left py-6'>กรอกข้อมูลผู้ใช้งาน</h2>
//                 <div className='flex flex-col py-2'>
//                     <input type='text' className='border-bottom pl-4 pb-2 pt-2' name='name' id="exampleInputName" placeholder='ชื่อ'/>
//                 </div>
//                 <div className='flex flex-col py-2'>
//                     <input type='text' className='border-bottom pl-4 pb-2 pt-2' name='surname' id="exampleInputSurname" placeholder='นามสกุล'/>
//                 </div>
//                 <div className='flex flex-col py-2'>
//                     <input type='text' className='border-bottom pl-4 pb-2 pt-2' name='email' id="exampleInputEmail" placeholder='อีเมลที่ใช้'/>
//                 </div>
//                 <div className='flex flex-col py-2'>
//                 <select id="countries" name='country' type='text' className="border-bottom text-gray-400 pl-3 text-sm block w-full p-2.5 ">
//                     <option>กรุงเทพ</option>
//                     <option>Canada</option>
//                     <option>France</option>
//                     <option>Germany</option>
//                 </select>
//                 </div>
                
//                 <div className='pl-4 pr-4 ml-1'>
//                     <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>เข้าสู่ระบบ</button>
//                 </div>
//             </form>
                 
//         </div>
//     </div>
//     )
// }


// export default Page2;