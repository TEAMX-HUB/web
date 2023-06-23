import Input from '../components/reusables/Input'
import arrow from '../assets/arrow.png'

import compax from '../assets/compax.png'
import Button from '../components/reusables/Button'
import { Link } from 'react-router-dom'
const btn ={
  width:"259px",
  background:"#CDE5CE",
  color:"black"
}
const SignUp = () => {
  return (
   <>
   <div className="flex items-center  p-6 space-x-[100px]">
  <Link to="/login" > <div className=""> <img src={arrow} alt="" /></div></Link>
    <h1 className='text-[20px]'>SIGNUP</h1>
   </div>
    <div className='flex flex-col items-center space-y-[40px] pt-6 ' >
      
      <div className="flex flex-col items-center">
      
                <img src={compax} alt="" />
      </div>
      <div className="">
      <Input id='name' style={{width:"300px"}} placeholder='What’s your first name?' />
      <Input id='name' placeholder='And your last name?' />
      <Input id='name' style={{width:"300px"}} placeholder='Student Reference Number' />
      <Input id='name' placeholder='Select Your Department' />
      <Input id='name' style={{width:"300px"}} placeholder='Type in Your Password' />
     
      </div>
      <Button style={btn}>SignUp</Button>
     
     </div></>
  )
}

export default SignUp