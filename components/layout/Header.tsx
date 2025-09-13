const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/logo.svg"
            alt="ALX Logo"
            className="w-20 h-auto invert"
          />
        </div>

        {/* Sign up / Sign in buttons */}
        <div className="flex gap-3">
          <button className="text-sm md:text-base font-medium border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition">
            Sign up
          </button>
          <button className="text-sm md:text-base font-medium border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
