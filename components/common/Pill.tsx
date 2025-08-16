import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({label, isActive = false, onClick})=>{
    return(
        <button 
        onClick={onClick}
        className={`px-4 py-1 rounded-full border text-sm ${
        isActive
          ? "bg-blue-700 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}>

            {label}
        </button>
    )
}
export default Pill;