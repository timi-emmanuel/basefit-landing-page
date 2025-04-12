const Hero = () => {
 return ( 
   <div className="relative overflow-hidden">     
     {/* TEXT */}
     <div className="text-white text-[2rem] text-center tracking-normal max-w-[50%] mx-auto z-10 relative py-10 ">
       <h2 className="font-normal">
         The first Web3 powered fitness platform that{" "}
         <span className="bg-gradient-to-r from-[#D3F615] via-[#33CAD5DB] to-[#D3F615] font-bold bg-clip-text text-transparent">
           rewards your progress and makes a real-world impact
         </span>
       </h2>
     </div>

     {/* IMAGE with blur and overlay */}
     <div className="relative ">
      <div className="absolute inset-0  z-50">
        <div className="w-full h-full bg-[url('/src/assets/hero-image-desktop.svg')] bg-cover bg-center filter  opacity-60"
        />
        <div className="absolute inset-0  bg-gradient-to-t from-[#051626] via-transparent to-[#051626]" />
      </div>
      {/* Empty space to give height bg-[#051626]/60 */}
      <div className="h-64" />
     </div>      
   </div>
 );
};

export default Hero