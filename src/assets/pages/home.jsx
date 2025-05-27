
import { useEffect} from "react";
import Footer from "../components/footer/footer.jsx"
import Navigator from "../components/navigator.jsx"
import { useLocation } from "react-router-dom";

import spiral_img from '/done.png'

function Home(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   return(
      <>
         <main className="max-w-[1100px] mx-auto relative mb-10">

            <section className="w-full h-[60rem] z-10 relative overflow-hidden p-4">
               
               <img className="spiral-animation h-[30rem] select-none min-w-min absolute opacity-[var(--img-opa)] left-1/2 transform -translate-x-1/2" src={spiral_img} alt="" />
               
               <div className="w-full h-[20rem] relative bg-amber-100 z-30 mt-[9.8rem]">

               </div>

            
            </section>

            <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
               <Navigator active="home"/>
            </div>
            
         </main>
         <Footer />
      </>
   )
}

export default Home