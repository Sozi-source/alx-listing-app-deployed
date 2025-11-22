import Link from "next/link";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-500 text-white px-6 py-10">
      {/* Top section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
        {/* Logo + About (left side, half width) */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/assets/icons/logo.jpg"
            alt="logo"
            width={80}
            height={80}
            className=""/>
           
          </div>
          <p className="text-sm leading-relaxed text-gray-300 md:w-[90%]">
           <span className="font-bold">Holidays</span> is a platform where travellers can discover and book unique,
            comfortable, and affordable lodging worldwide. From cozy city apartments
            and tranquil countryside retreats to exotic beachside villas, Holidays
            connects you with the perfect place to stay for any trip.
          </p>
        </div>

        {/* Explore, Company, Help (right side, aligned right) */}
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-start md:justify-end gap-12">
          {/* Explore */}
          <div>
            <Link href={"/properties"} className="font-extrabold">Explore</Link>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Apartments in Dubai</li>
              <li>Villas in Bali</li>
              <li>Hotels in New York</li>
              <li>Mansions in Indonesia</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-extrabold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>About us</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-extrabold text-lg mb-3">Help</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Support</li>
              <li>Cancel booking</li>
              <li>Refund process</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white border-t-1 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white space-y-4 md:space-y-0">
        <p className="md:w-1/2">
          Some hotels require you to cancel more than 24 hours before check-in.
        </p>
        <div className="flex space-x-6">
          <p>Terms of Service</p>
          <p>Policy Service</p>
          <p>Cookies Policy</p>
          <p>Partners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
