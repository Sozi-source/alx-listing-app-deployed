import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Home() {
  const router= useRouter()

  const slides = [
    "/assets/hero/1.png",
    "/assets/hero/2.png",
    "/assets/hero/3.png",
    "/assets/hero/4.png",
    "/assets/hero/5.png",
    "/assets/hero/6.png",
    "/assets/hero/7.png",
    "/assets/hero/8.png",
    "/assets/hero/9.png",
    "/assets/hero/10.png",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev)=> (prev + 1) % slides.length)
    }, 6000)
    return ()=> clearInterval(interval)
  }, [])


  return (
    <div className="px-5 md:px-10 lg:px-20">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mt-5">
        
        {slides.map((src, index)=>(
          <Image
          key={index}
          src={src}
          alt="Hero"
          loading={index === 0 ? "eager" : "lazy"}
          fill
          className={`object-cover object-bottom transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0" }`}
             
        />
        ))}

        {/* Text overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-white">
            Find your favourite <br /> place here!
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mt-3 drop-shadow-md text-white">
            The best place for over 2 million properties worldwide
          </p>

             {/* Explore Properties */}
           <button onClick={()=>router.push("/properties")}
            className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg 
            shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">Explore Properties</button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 text-center mb-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-500">Why Choose Us?</h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto"> Verified listings, effortless booking, 
          and round-the-clock support make finding your perfect stay simple and stress-free.
        </p>
      </div>

     
   
    </div>
  );
}
