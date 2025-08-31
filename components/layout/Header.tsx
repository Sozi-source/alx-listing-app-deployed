
const Header: React.FC =()=>{
    return(

        <header className="flex justify-between">
            <div className="flex gap-5">
        {/* logo */}
                <div>
                </div>
        
        {/* search bar */}
                <div>
                    <input 
                    type="text"
                    placeholder="Search your destination" className="border border-gray-500 rounded-sm text-xl p-2 mt-5 mb-3"
                     />
                </div>
        {/* sign up button */}
                <div className=" flex gap-5">
                    <button className="text-lg border border-gray-400 bg-blue-400 hover:bg-blue-200 rounded-md text-white p-2 mt-5 mb-3">Sign up</button>
                    <button className="text-lg border border-gray-400 bg-blue-400 hover:bg-blue-200 rounded-md text-white p-2 mt-5 mb-3">Sign in</button>
                </div>                 
        {/*  accommodation types*/}
                <nav className="space-x-4">
                    <button className="border border-gray-500 rounded-sm text-xl p-2 mt-5 mb-3">Rooms </button> 
                    <button className="border border-gray-500 rounded-sm text-xl p-2 mt-5 mb-3">Mansions </button> 
                    <button className="border border-gray-500 rounded-sm text-xl p-2 mt-5 mb-3">CountrySide </button> 
                </nav>
            </div>
        </header>
    )
}
export default Header;