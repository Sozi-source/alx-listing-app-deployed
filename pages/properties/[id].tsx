import BookingSection from "@/components/property/BookingSection";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Star, Bed, ShowerHead, Users } from "lucide-react";
import { propertyprops } from "@/interfaces";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<propertyprops | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const propertyId = Array.isArray(id) ? id[0] : id; // ensure string

     const fetchProperty = async () => {
      try {
        const response = await fetch(`https://json-server-api-y5tr.onrender.com/properties/${propertyId}`);
        if (!response.ok) throw new Error("Failed to fetch property");
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("An error occurred", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  },[id]);

  if (loading) return <p>Loading Properties...</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Property Info */}
      {property?.image && (
        <Image
          src={property.image}
          alt={property.name}
          width={1000}
          height={600}
          className="w-full object-cover h-[300px] md:h-[400px] lg:h-[500px] rounded-xl shadow-md hover:shadow-lg transition"
        />
      )}

      {/* Card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg">
        <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">{property.name}</h2>
        <p className="text-gray-500">
          {property?.address?.city}, {property?.address?.state}, {property?.address?.country}
        </p>

        <p className="text-blue-600 font-bold text-lg">KES {property.price}/night</p>

        {property?.category && (
          <p className="inline-block mt-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-md">
            Discount: KES {property?.discount}
          </p>
        )}

        <div className="flex items-center space-x-3 text-sm text-gray-700">
          <span className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm">
            <Bed className="h-5 w-5 text-blue-500 mr-1" /> 
             {property?.offers?.bed}
          </span>
          
          <span className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm">
            <ShowerHead className="h-5 w-5 text-teal-500 mr-1" /> 
             {property?.offers?.shower}
          </span>
          
          <span className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm">
            <Users className="h-5 w-5 text-yellow-500 mr-1" />
             {property?.offers?.occupants}
          </span>
        </div>
      </section>

      {/* Booking Section */}
        <section>
        <BookingSection price={property?.price} discount={property?.discount}/>
        </section>
      </div>

      {/* Review Section */}
      <section className="mt-12 border border-blue-100 pt-6 w-full max-w-none bg-gray-50 p-4 rounded-lg shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <ReviewSection id={Number(id)} />
        </div>
      </section>
    </main>
  );
}
