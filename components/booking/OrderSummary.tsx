import { BookingDetailsprops } from "@/interfaces"


const Ordersummary:React.FC<{bookingdetails: BookingDetailsprops}>=({bookingdetails})=>{
    const{propertyName, startDate, totalNights, price, discount}= bookingdetails;

    const subtotal= totalNights * price;
    const total= subtotal - discount;

    return(
        <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Property:</span>
                    <span>{propertyName}</span>
                </div>
                <div className="flex justify-between">
                    <span>Check-in Date:</span>
                    <span>{new Date(startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Nights:</span>
                    <span>{totalNights} night(s)</span>
                </div>
                <div className="flex justify-between">
                    <span>Price per night:</span>
                    <span>KES {price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>KES {subtotal.toFixed(2)}</span>
                </div>
               
                <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total:</span>
                    <span>KES {total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
export default Ordersummary;