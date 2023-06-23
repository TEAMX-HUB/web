// eslint-disable-next-line no-unused-vars

import { Link } from 'react-router-dom'
import image from '../assets/compax.png'
import Button from '../components/reusables/Button'
const btn ={
  width:"335px",
  background:"#CDE5CE",
  color:"black"
}

const FirstPage = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center space-y-[80px] justify-center white' >
        <div  className=' text-[30px] space-y-4 flex flex-col items-center '>
          <img src={image} alt="" />
        <h1 className='text-[50px]' style={{ 
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
               backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(180,45,191,1) 41%, rgba(0,212,255,1) 100%)"}} >COMPAX</h1>
               <p className='text-[18px]'>Taglines goes here!</p>

    </div>
    <div className="flex flex-col gap-5">
    <Button style={btn}>Tour Campus</Button>
    <Link to="/login" ><Button style={btn}>Login/Signup</Button></Link>
     
    </div>

    </div>
  )
}

export default FirstPage