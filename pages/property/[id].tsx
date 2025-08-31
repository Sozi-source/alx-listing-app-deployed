import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import BookingSection from "@/components/property/BookingSection"
import ReviewSection from "@/components/property/ReviewSection";
import { SampleReviews } from "@/constants/reviews";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === Number(id));

  const reviews = SampleReviews.filter((review)=> review.propertyId===Number(id))



  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <div>
        <PropertyDetail property={property} />
        <ReviewSection reviews={reviews} />
      </div>

      <div>
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}