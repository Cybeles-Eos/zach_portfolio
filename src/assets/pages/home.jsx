
import { useEffect} from "react";
import Footer from "../components/footer/footer.jsx"
import Navigator from "../components/navigator.jsx"
import { useLocation } from "react-router-dom";

import spiral_img from '/done.png'

function Home(){
   const right_i = <svg xmlns="http://www.w3.org/2000/svg" className="mt-[.6px]" width="20" height="20" fill="var(--bg-clr)" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>;

   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   return(
      <>
         <main className="max-w-[1100px] mx-auto relative mb-10">

            <section className="w-full h-[60rem] z-10 relative overflow-hidden p-4">
               
               <img className="spiral-animation h-[30rem] select-none min-w-min absolute opacity-[var(--img-opa)] left-1/2 transform -translate-x-1/2" src={spiral_img} alt="" />
               
               <div className="max-[650px]:mt-[13rem] w-full flex flex-col items-center relative z-30 mt-[12rem]">
                  <h1 id="title_intro" className="max-[430px]:leading-[20vw] max-[430px]:text-[24.5vw] max-[650px]:my-[1.7rem] max-[650px]:leading-[18vw] max-[650px]:text-[23vw]  relative h-fit w-fit text-center min-[1200px]:text-[7.7rem] text-[10.1vw] uppercase">
                     Crafting Websites
                     <span className="max-[430px]:top-[-10.8vw] max-[430px]:left-[12vw] max-[650px]:top-[-10.5vw] max-[650px]:left-[13.4vw] absolute text-[13px] top-[2vw] min-[1200px]:top-[1.5rem] left-[3.4vw] min-[1200px]:left-[2.4rem]">2022  *  2025</span>
                  </h1>
                  <p className="max-[430px]:mx-[1.08rem] max-[650px]:mt-[1rem] max-[650px]:mx-[1.5rem] poppins_font max-w-[500px] text-[14px] text-center text-[var(--grayM)]"><span className="wave">👋</span> Hi, I’m Zach a creative frontend developer. I design and build clean, responsive, and user-friendly websites that bring ideas to life.</p>
                  
                  <div className="flex gap-[1rem] mt-9">
                     <button id="ss" className="poppins_font flex-center rounded-md cursor-pointer gap-3 px-[1rem] py-[.6rem] text-[13px] text-[var(--foo-lg)] bg-[var(--text-clr)]">
                        {right_i}
                        Go to projects
                     </button>
                     <button className="poppins_font flex-center rounded-md cursor-pointer px-[1.4rem] py-[.6rem] text-[13px] text-[var(--text-clr)] border border-[var(--text-clr)]">
                        Resume
                     </button>
                  </div>
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