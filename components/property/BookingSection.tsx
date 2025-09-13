import { BookingDetailsprops } from "@/interfaces";
import { useState } from "react";
import { useRouter } from "next/router";

interface BookingSectionProps {
  price: number;
  discount: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price, discount}) => {
  const [checkin, setCheckin]=useState("");
  const [checkout, setCheckout]=useState("");

  const router = useRouter()

  // Calculate number of nights
  const getTotalNights = () => {
    if (!checkin||!checkout) return 0;
    const start = new Date(checkin);
    const end = new Date(checkout);
    const diffTime = end.getTime()-start.getTime();
    if(diffTime <= 0) return 0;

    return Math.ceil(diffTime/(1000 * 60 * 60 * 24))
  }
    const totalNights = getTotalNights();
    const subtotal= totalNights * price;
    const total= Math.max(subtotal-discount, 0)
  

   return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">KES {price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" value={checkin} onChange={(e)=>setCheckin(e.target.value)} className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" value={checkout} onChange={(e)=>setCheckout(e.target.value)} className="border p-2 w-full mt-2" />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>Total payment: <strong>KES {total}</strong></p>
      </div>

      {/* Reserve button */}
      {checkin && checkout &&(
        <div>
          <button onClick={(e)=>router.push("/booking")} className="bg-green-500 text-white py-2 px-4 rounded-md mt-3">Reserve now</button>
        </div>
      )}
    </div>
  );
};

export default BookingSection;

