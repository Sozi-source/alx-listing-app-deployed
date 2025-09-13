import axios from "axios";
import { useState, useEffect } from "react";
import { Reviewprops } from "../../interfaces";
import { Star } from "lucide-react";

interface ReviewSectionProps {
  id: number; // Property ID to fetch reviews for
}

const ReviewSection:React.FC<ReviewSectionProps> = ({id}) => {
  const [reviews, setReviews] = useState<Reviewprops[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://json-server-api-y5tr.onrender.com/reviews?propertyId=${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }
if (reviews.length === 0) { 
  return <p>No reviews available for this property.</p>;
}
  
return (
    <div className="w-full space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-4 bg-white rounded-lg shadow-md space-y-1">
          <h4 className="font-semibold text-gray-800">{review.name}</h4>
          <div className="flex items-center gap-1 text-sm text-yellow-500 mb-2">
            <Star className="w-12 h-8 text-yellow-500 p-1"/>
            <span className="font-medium text-gray-700">{review.rating}/5</span>
          </div>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;