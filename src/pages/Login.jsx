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
const Login = () => {
  return (
   <>
   <div className="flex items-center  p-6 space-x-[100px]">
  <Link to="/"> <div className=""> <img src={arrow} alt="" /></div></Link>
    <h1 className='text-[20px]'>LOGIN</h1>
   </div>
    <div className='flex flex-col items-center space-y-[80px] pt-6 ' >
      
      <div className="flex flex-col items-center">
      <h1 className='text-[60px]' style={{ 
           backgroundClip: "text",
           WebkitBackgroundClip: "text",
           color: "transparent",
                backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(180,45,191,1) 41%, rgba(0,212,255,1) 100%)"}} >COMPAX</h1>
                
                <img src={compax} alt="" />
      </div>
      <div className="">
      <Input id='name' style={{width:"300px"}} placeholder='student reference number' />
      <Input id='name' placeholder='Type in your password' />
      
      </div>
     <div className="space-y-5">
     <Button style={btn}>Login</Button>
      <p>Dont have an account?<Link to="/signup"><span className=' px-2 text-red-300 text-center' >Signup</span></Link></p>
     </div>
     
     </div></>
  )
}

export default Login