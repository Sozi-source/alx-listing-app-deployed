import { useState } from "react";
import Pill from "@/components/common/Pill";
<<<<<<< HEAD
=======
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Link from "next/link";
>>>>>>> b560877029514670485d05ac887510730c8de948


const filters = [
  "Top Villa",
  "Self Checkin",
  "Ocean View",
  "Pet Friendly",
  "Countryside",
];

const Home: React.FC =()=>{
const [activeFilter, setActiveFilter] = useState<string>("");

<<<<<<< HEAD
=======
const filteredProperties = activeFilter? 
PROPERTYLISTINGSAMPLE.filter((property)=>property.category.includes(activeFilter)): PROPERTYLISTINGSAMPLE;

>>>>>>> b560877029514670485d05ac887510730c8de948
  return(
    <div className="mt-8">
      {/* Headline */}
      <h2 className="text-2xl font-bold mb-">Find your favorite place here! <br />
      <span className="text-lg font-normal">
        The best prices for over 2 million properties worldwide.
      </span>

      </h2>

      {/* Filter section */}
      <div>
        {filters.map((filter)=>(
          <Pill
          key={filter}
          label={filter}
          isActive ={activeFilter === filter}
          onClick={()=>setActiveFilter(filter)} />
        ))}

        {/* selected filters */}
        <p className="text-sm text-gray-500">
          Selected filter:{" "}
          <span className="font-medium">{activeFilter || "None"} </span>
        </p>

<<<<<<< HEAD
=======
        {/* Property listing */}
        <div>
          {filteredProperties.map((item)=>(
            <div key={item.id}>
              <img src="" alt="" />
              <h2>{item.name} </h2>
              <p>{item.address.city}- {item.address.country}</p>
              <p>${item.price}/night </p>
            <Link href={'/'}> </Link>

            </div>
          ))}
        </div>

>>>>>>> b560877029514670485d05ac887510730c8de948
      </div>
    </div>
  )
}