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
          <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300">
            Sign up
          </button>
          <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
