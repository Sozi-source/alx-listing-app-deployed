import { propertyprops } from "@/interfaces";

interface props{
property: propertyprops
}

const PropertyCard: React.FC<props>=({property})=>{

    return(
        <div className="bg-blue-100 border border-gray-500 w-40 md:w-60 lg:w-80 rounded-md p-3">
        <p>Bedroom: {property.bedrooms} </p>
        <p>Country: {property.country} </p>
        <p>State: {property.state} </p>
        <p>City: {property.city} </p>

        </div>
    )

}
export default PropertyCard;