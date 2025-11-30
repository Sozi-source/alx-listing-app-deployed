import ProtectedRoute from "@/components/ProtectedRoute"
import BookingForm from "@/components/bookingform"

const BookingPage: React.FC=()=>{

  return(
      <ProtectedRoute>
      <BookingForm/>
    </ProtectedRoute>
    
  )
}
export default BookingPage;