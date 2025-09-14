import PropertyCard from "@/components/property/PropertyCard"
import { propertyprops } from "@/interfaces"
import { useState, useEffect } from "react"

export default function PropertiesPage(){
const[properties, setProperties]=useState<propertyprops[]>([])
const[loading, setLoading]=useState(true)

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {properties.map((property)=>(
            <PropertyCard key={property.id} property={property}/>
        ))}

        </div>
    )
}