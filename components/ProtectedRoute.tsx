import { useAuth } from "@/context/authContext"
import { useRouter } from "next/router"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const{currentUser, loading} = useAuth()
    const router = useRouter()

   if(!loading && !currentUser){
    router.push("/auth/signin")
    return null
   }
    return <>{children}</>
}
