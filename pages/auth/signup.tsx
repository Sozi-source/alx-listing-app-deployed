import { useAuth } from "@/context/authContext";
import { useState } from "react";



export default function Signup(){

const {signup} = useAuth();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit =async(e:any)=>{
    e.preventDefault();
    await signup(email, password)
    alert("User signed up successfully")
    setEmail("");
    setPassword("");
}
    return(
        <form onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">

            <input type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            
            <input type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            
            <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >Sign Up
            </button>
        </form>
    )
}