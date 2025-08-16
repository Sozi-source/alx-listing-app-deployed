import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
<<<<<<< HEAD
import BookingSection from "@/components/property/BookingSection"
import ReviewSection from "@/components/property/ReviewSection";
import { SampleReviews } from "@/constants/reviews";

=======
import ReviewSection from "@/components/property/ReviewSection"
import BookingSection from "@/components/property/BookingSection"
>>>>>>> b560877029514670485d05ac887510730c8de948

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === Number(id));

<<<<<<< HEAD
  const reviews = SampleReviews.filter((review)=> review.propertyId===Number(id))



=======
>>>>>>> b560877029514670485d05ac887510730c8de948
  if (!property) return <p>Property not found</p>;

  return (
    <div>
<<<<<<< HEAD
      <div>
        <PropertyDetail property={property} />
        <ReviewSection reviews={reviews} />
      </div>

      <div>
        <BookingSection price={property.price} />
      </div>
=======
      <PropertyDetail property={property} />
>>>>>>> b560877029514670485d05ac887510730c8de948
    </div>
  );
}