import Image from "next/image";
import { useRouter } from "next/router";


const Header: React.FC = () => {

  const router = useRouter()

  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/icons/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
            onClick={()=>router.push("/")}
          />
        </div>

        {/* Sign up / Sign in buttons */}
        <div className="flex gap-3">
          <button className="text-sm md:text-base font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition">
            Sign up
          </button>
          <button className="text-sm md:text-base font-medium bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 transition">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
