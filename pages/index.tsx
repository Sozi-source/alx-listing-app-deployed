import Image from "next/image";
import { useRouter } from "next/router";



export default function Home() {
  const router= useRouter()
  return (
    <div className="px-5 md:px-10 lg:px-20">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg mt-5">
        <Image
          src="/assets/images/hero.png"
          alt="Hero"
          fill
          className="object-cover object-bottom"
        />
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
            className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">Explore Properties</button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 text-center mb-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto"> We provide verified listings, easy booking, and 24/7 support to help you find your
          perfect stay
        </p>
      </div>

     
   
    </div>
  );
}
