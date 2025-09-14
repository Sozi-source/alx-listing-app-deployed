import { propertyprops } from "@/interfaces";
import Link from "next/link";
import { Star} from "lucide-react";
import Image from "next/image";

interface props{
property: propertyprops
}
const PropertyCard:React.FC<props>=({property})=>{

return(
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-96">
    <Image src={property.image} 
    width={300}
    height={200}
    alt={""} 
    className="object-cover hover:scale-105 transition-transform duration-300"/>
    
    {/* Card content */}
    <div className="p-5 space-y-4">
    <div>
    <h2 className="text-lg font-semibold text-gray-900 truncate">{property.name}</h2>
    <p>{property.address.city}, {property.address.state}, {" "} {property.address.country}  </p>
    </div>
    
    <div className="flex items-center justify-between">
    <p className="text-blue-600 font-bold text-lg"><span className="text-sm">KES {property.price}/night </span></p>
    </div>

    {property.category &&(
    <p className="text-sm text-green-600 font-medium">Discount: KES {property.discount} </p>
        )}
    
    <div className="flex items-center">
    <Star className="h-5 w-5 text-yellow-500 mr-1 inline"/>
    <span className="text-sm font-medium">{property.rating} </span>
    </div>

    <div className="flex items-center space-x-4 text-sm text-gray-600">
    <Link href={`/properties/${property.id}`}
    className="block w-1/4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">View Details</Link>
    </div>
    </div>
    
    </div>
)
}
export default PropertyCard;