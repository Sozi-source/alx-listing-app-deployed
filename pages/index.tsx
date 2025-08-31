import { useState } from "react";
import Pill from "@/components/common/Pill";


const filters = [
  "Top Villa",
  "Self Checkin",
  "Ocean View",
  "Pet Friendly",
  "Countryside",
];

const Home: React.FC =()=>{
const [activeFilter, setActiveFilter] = useState<string>("");

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

      </div>
    </div>
  )
}