import PropertyCard from "@/components/property/PropertyCard"
import { propertyprops } from "@/interfaces"
import { useState, useEffect } from "react"

export default function PropertiesPage(){
const[properties, setProperties]=useState<propertyprops[]>([])
const[loading, setLoading]=useState(true)
const[page, setPage]=useState(1)

const perPage = 20;

const start =(page-1)* perPage;
const end = start + perPage;
const currentProperties = properties.slice(start, end)

useEffect(()=>{
const fetchProperties=async()=>{

try {
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/properties`)
const data = await response.json()
setProperties(data)
    
} catch (error) {
    console.error("An error occured", error)
    
}finally{
    setLoading(false)
}

}
fetchProperties()
},[])

if(loading)return <p>Properties are now loading...</p>
if(!properties)return <p>Properties not found</p>

    return(
       <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentProperties.map((property)=>(
            <PropertyCard key={property.id} property={property}/>
        ))}
        </div>
         
         {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2 mb-5">
            {page > 1 &&(
                <button onClick={()=>setPage(page-1)} className="px-4 py-2 bg-black rounded-xl w-36 text-white">Previous</button>
            )}

            {end < properties.length &&(
                <button onClick={()=>setPage(page + 1)} className="px-4 py-2 bg-black rounded-xl w-36 text-white">Show more</button>
            )}
        </div>
       </div>
       
    )
}