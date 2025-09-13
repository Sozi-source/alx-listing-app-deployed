import Image from "next/image";
import PropertiesPage from "./properties";

export default function Home(){
  
return(
    <div className="m-10 ">
      <div>
        <Image src="/assets/images/hero.png" alt="" className="w-[1200px] h-[200px] object-cover" />
      </div>
    
    <div className="mt-10">
      <PropertiesPage/>
    </div>


    </div>
  )
}
