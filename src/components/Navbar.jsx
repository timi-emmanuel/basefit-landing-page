import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import star from '../assets/star.svg'
import sendIcon from '../assets/send-icon.svg'
import faceIcon from '../assets/face-icon.svg'

const items = ['Home', 'Tokens', 'Learn', 'About']

const Navbar = () => {
 return ( 
  <div className="w-full h-20 flex items-center font-basefit backdrop-blur-sm bg-[#051c31]">
    {/* <div className='w-4/5 h-48 absolute bg-[#33CAD5]/[18%]  left-1/2 -translate-x-1/2  rounded-full -z-10'>
    </div> bg-[#051626] */}
    <div className="absolute inset-0 w-[64rem] h-[46rem]  bg-[#33CAD52E] rounded-full -mt-[36rem] -z-10 left-1/2 -translate-x-1/2 blur-[90px]"></div>
    <div className="flex justify-between w-[95%] md:w-[90%] items-center mx-auto ">
       <img src={logo} alt="logo icon" className='w-24 h-10'/>
       <ul className='text-white md:flex justify-between font-medium items-center gap-10 hidden'>{items.map((item,index)=>(
        <li key={index+1} className={`${index === 0 ? 'text-Lightgreen' : 'text-white'} `}>{item}</li>
       ))}</ul>

       <div className='flex gap-2 md:gap-4 justify-center items-center'>
        {/* Icons */}
           <div className="flex items-center gap-3">
              {[faceIcon, sendIcon].map((icon, idx) => (
                <div
                  key={idx}
                  className="p-[2px] rounded-full bg-gradient-to-r from-[#BBD531] to-[#115A71] hidden md:block"
                >
                  <div className="bg-[#0D1A2D] rounded-full w-10 h-10 flex items-center justify-center">
                    <img src={icon} alt="icon" className="w-5 h-5" />
                  </div>
                </div>
              ))}
           </div>

              {/* Get Started Button */}
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#BBD531] to-[#115A71]">
                <div className="bg-[#0D1A2D] rounded-full px-2 md:px-6  py-2 flex items-center md:gap-2">
                  <img src={star} alt="star" className="w-4 h-4" />
                  <span className="text-Lightgreen text-sm md:text-lg font-bold">Get started</span>
                </div>
          </div>
           
           <div>
            <img src={hamburger} alt="" className='h-4 w-4 md:hidden'/>
           </div>

       </div>         
      
    </div>
  </div>
  );
}
 
export default Navbar;