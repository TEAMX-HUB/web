
import Input from '../components/reusables/Input'
import arrow from '../assets/arrow.png'


import Button from '../components/reusables/Button'
import { Link } from 'react-router-dom'
import profile from "../assets/profile.png"
const btn ={
  width:"259px",
  background:"#CDE5CE",
  color:"black"
}

const BioData = () => {
  return (
    <>
    <div className="flex items-center  p-6 space-x-[100px]">
   <Link to="/login" > <div className=""> <img src={arrow} alt="" /></div></Link>
     <h1 className='text-[20px]'>Bio-Data</h1>
    </div>
     <div className='flex flex-col items-center space-y-[40px] pt-6 ' >
       
       <div className="flex flex-col items-center">
       
                 <img src={profile} alt="" />
                 <h1 className='texBioData]'>Itunuoluwa Abidoye</h1>
                 <p className='text-[#ABABAB] text-[18px]'>Itunuoluwa@petra.africa</p>
       </div>
       <div className="">
       <Input id='name' style={{width:"300px"}} placeholder='What’s your first name?' />
       <Input id='name' placeholder='And your last name?' />
       <Input id='name' style={{width:"300px"}} placeholder='Student Reference Number' />
       <Input id='name' placeholder='Select Your Department' />
       <Input id='name' style={{width:"300px"}} placeholder='Type in Your Password' />
      
       </div>
       <Button style={btn}>Update Profile</Button>
      
      </div></>
  )
}

export default BioData