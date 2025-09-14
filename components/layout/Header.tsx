import Image from "next/image";
import { useRouter } from "next/router";


const Header: React.FC = () => {

  const router = useRouter()

  return (
    <header className="w-full bg-gray-700 shadow-md px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="ALX Logo"
            width={100}
            height={100}
            className="invert p-3"
            onClick={()=>router.push("/")}
          />
        </div>

        {/* Sign up / Sign in buttons */}
        <div className="flex gap-3">
          <button className="text-sm md:text-base font-medium bg-gray-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition">
            Sign up
          </button>
          <button className="text-sm md:text-base font-medium bg-gray-700 text-white hover:bg-gray-600 rounded-md px-4 py-2 transition">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
