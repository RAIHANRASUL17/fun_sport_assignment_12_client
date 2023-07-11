import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const usePayment = (asc) => {
console.log("-----",asc)
const {user, loading} = useContext(AuthContext);

const {data: payment=[], isLoading, refetch} = useQuery({
    queryKey: ["paymentHistory", asc],
    
    enabled: !loading && !!user?.email,

    queryFn: async()=>{
        // const res = await fetch("https://assignment-12-server-six-rho.vercel.app/paymentHistory")

        // const res = await fetch(`http://localhost:7000/paymentHistory?sort=${asc ? "asc" : "desc"}`)

        const res = await fetch(`https://assignment-12-server-six-rho.vercel.app/paymentHistory?sort=${asc ? "asc" : "desc"}`)

        return res.json();
    }
})
return [payment, isLoading, refetch]
};

export default usePayment;