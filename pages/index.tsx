import Image from "next/image";
import PropertiesPage from "./properties";

export default function Home(){
  
return(
    <div className="px-5">
      <div className="relative w-full h-[250px] md:h-[480px] lg:h-[560px] rounded-xl overflow-hidden shadow-md">
        <Image src="/assets/images/hero.png" alt="" 
        width={1600}
        height={400}
        className="h-[400px] w-full mt-10"/>
      </div>
      <div className="absolute top-[30%] w-full flex flex-col items-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-10">Find your favourite <br/> place here !</h1>
        <p className="text-sm md:text-lg lg:text-xl mt-2">The best place for over 2 million properties worldwide</p>
      </div>
    
    <div className="mt-10">
      <PropertiesPage/>
    </div>


    </div>
  )
}
