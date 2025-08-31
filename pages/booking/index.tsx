import BookingForm from "@/components/booking/BookingForm"
import OrderSummary from "@/components/booking/OrderSummary"
import CancellationPolicy from "@/components/booking/CancellationPolicy"


export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Booking form + rules + policy */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <BookingForm />
          </div>


          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Cancellation Policy</h2>
            <CancellationPolicy />
          </div>
        </section>

        {/* Right Section: Order summary */}
        <aside>
          <div className="bg-white rounded-xl shadow p-6 sticky top-6">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </aside>
      </div>
    </div>
  )
}
