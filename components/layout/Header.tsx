
const Header: React.FC =()=>{
    return(

        <header className="flex justify-center items-center bg-white shadow-md">
            <div className="flex gap-5">
        {/* logo */}
                <div>
                    <img src="" alt="" />
                </div>
        
        {/* search bar */}
                <div>
                    <input 
                    type="text"
                    placeholder="Search your destination"
                     />
                </div>
        {/* sign up button */}
                <div className="space-x-3">
                    <button>sign Up</button>
                    <button>Sign In</button>
                </div>                 
        {/*  accommodation types*/}
                <nav className="space-x-4">
                    <button>Rooms </button> 
                    <button>Mansions </button> 
                    <button>CountrySide </button> 
                </nav>
            </div>
        </header>
    )
}
export default Header;