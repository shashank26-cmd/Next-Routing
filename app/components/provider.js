"use client"
const { usePathname } = require("next/navigation")
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
 import ErrorPage from "../not-found";

const ComponentProvider =({children })=>{
const data=usePathname();
return (
    <>
    {
        data=='/About' || data=="/Start" || data=="/MyProfile" || data=="/" || data=="/Contact" ?
         <>
         <Navbar />
         {children}
         <Footer />
         </>

: 
<>
<ErrorPage />
</>

    }

    </>
)
}
export default  ComponentProvider;