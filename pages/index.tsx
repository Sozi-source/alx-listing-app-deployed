import { useRouter } from "next/router";
import PropertiesPage from "./properties";
const Home: React.FC=()=>{
const router = useRouter()
  
return(
    <div className="m-10 ">
      <div>
        <img src="/assets/images/hero.png" alt="" className="w-[1608px] h-[481px] object-cover" />
      </div>
    
    <div className="mt-10">
      <PropertiesPage/>
    </div>


    </div>
  )
}
export default Home;