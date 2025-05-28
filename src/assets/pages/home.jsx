
import { useEffect} from "react";
import Footer from "../components/footer/footer.jsx"
import Navigator from "../components/navigator.jsx"
import { useLocation } from "react-router-dom";
import { useState } from "react";

import spiral_img from '/done.png'
import lineSp from '/rolls.png'
import me from '/zach1.jpg'

function Home(){
   const right_i = <svg xmlns="http://www.w3.org/2000/svg" className="mt-[.6px]" width="20" height="20" fill="var(--bg-clr)" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>;   
   const mouse_i = <svg xmlns="http://www.w3.org/2000/svg" className={`mouse rotate-[180deg]`} viewBox="0 0 24 24" width="24" height="24" fill="var(--text-clr)" ><path d="M11.1411 4C9.5587 4 8.75361 4.16876 8.01266 4.56502C7.38342 4.90155 6.90155 5.38342 6.56502 6.01266C6.16876 6.75361 6 7.5587 6 9.14111V14.8589C6 16.4413 6.16876 17.2464 6.56502 17.9873C6.90155 18.6166 7.38342 19.0985 8.01266 19.435C8.75361 19.8312 9.5587 20 11.1411 20H12.8589C14.4413 20 15.2464 19.8312 15.9873 19.435C16.6166 19.0985 17.0985 18.6166 17.435 17.9873C17.8312 17.2464 18 16.4413 18 14.8589V9.14111C18 7.5587 17.8312 6.75361 17.435 6.01266C17.0985 5.38342 16.6166 4.90155 15.9873 4.56502C15.2464 4.16876 14.4413 4 12.8589 4H11.1411ZM11.1411 2H12.8589C14.8728 2 15.9528 2.27848 16.9305 2.8014C17.9083 3.32432 18.6757 4.09169 19.1986 5.06946C19.7215 6.04724 20 7.12721 20 9.14111V14.8589C20 16.8728 19.7215 17.9528 19.1986 18.9305C18.6757 19.9083 17.9083 20.6757 16.9305 21.1986C15.9528 21.7215 14.8728 22 12.8589 22H11.1411C9.12721 22 8.04724 21.7215 7.06946 21.1986C6.09169 20.6757 5.32432 19.9083 4.8014 18.9305C4.27848 17.9528 4 16.8728 4 14.8589V9.14111C4 7.12721 4.27848 6.04724 4.8014 5.06946C5.32432 4.09169 6.09169 3.32432 7.06946 2.8014C8.04724 2.27848 9.12721 2 11.1411 2ZM11 6H13V11H11V6Z"></path></svg>;
   

   const location = useLocation();
   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   const [buttonText, setButtonText] = useState('cruzdawn58@gmail.com');
   const gmail = 'cruzdawn58@gmail.com';
   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(gmail);
         setButtonText('Copied!');
         setTimeout(() => {
         setButtonText('cruzdawn58@gmail.com');
         }, 2000); // back to normal after 2 seconds
      } catch (err) {
         console.error('Failed to copy Gmail:', err);
      }
   };
   
   return(
      <>
         <main className="w-full relative mb-10">

            <section className="main_content max-w-[1100px] pb-10 mx-auto z-10 relative overflow-hidden p-4">
               
               <img className="spiral-animation h-[30rem] select-none min-w-min absolute opacity-[var(--img-opa)] left-1/2 transform -translate-x-1/2" src={spiral_img} alt="" />
               
               <div className="max-[650px]:mt-[13rem] w-full flex flex-col items-center relative z-30 mt-[12rem]">
                  <h1 id="title_intro" className="max-[430px]:leading-[20vw] max-[430px]:text-[24.5vw] max-[650px]:my-[1.7rem] max-[650px]:leading-[18vw] max-[650px]:text-[23vw]  relative h-fit w-fit text-center min-[1200px]:text-[7.7rem] text-[10.1vw] uppercase">
                     Crafting Websites
                     <span className="max-[430px]:top-[-10.8vw] max-[430px]:left-[12vw] max-[650px]:top-[-10.5vw] max-[650px]:left-[13.4vw] absolute text-[13px] top-[2vw] min-[1200px]:top-[1.5rem] left-[3.4vw] min-[1200px]:left-[2.4rem]">2022  *  2025</span>
                  </h1>
                  <p id="title_label" className="max-[430px]:mx-[1.08rem] max-[650px]:mt-[1rem] max-[650px]:mx-[1.5rem] poppins_font relative max-w-[500px] text-[14px] text-center text-[var(--grayM)]"><span className="wave">👋</span> Hi, I’m Zach a creative frontend developer. I design and build clean, responsive, and user-friendly websites that bring ideas to life.</p>
                  
                  <div id="title_btns" className="relative flex gap-[1rem] mt-9">
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

            <section className="about-me max-[650px]:gap-[3.5rem] max-w-[1350px] z-10 mt-[7rem] relative py-15 gap-[1rem] overflow-hidden mx-auto ">
               <div className="relative max-[650px]:left-[-4rem] max-[800px]:left-[-9rem] h-[20rem]"> {/*rotate-[-30deg]*/}
                  <img src={me} className="absolute min-w-[9rem] left-[15rem] h-[9rem] top-[2rem] rounded-[20rem] z-10" alt="" />
                  <button onClick={handleCopy} id="myGmail" className="left-[10rem] bg-[var(--text-clr)] z-10 absolute bottom-2 text-[var(--bg-clr)] poppins_font h-[1.9rem] w-[10.5rem] rounded-[20rem] cursor-pointer text-[11px] py-[3px]">{buttonText}</button>
                  <img src={lineSp} className="absolute select-none z-0 top-[-3rem] rotate-[-120deg] left-[-3rem] min-w-[24rem] h-[24rem] opacity-[50%]" alt="" />
               </div>
               <div className="z-20 max-w-[700px] justify-self-end p-5 flex flex-col h-[100%]">
                  <div className="flex w-[100%] mb-[1.85rem] items-center justify-between flex-wrap gap-3">
                     <h1 className="text-[var(--text-clr)] leading-[28px] font-light text-[1.6rem]">Welcome to my world</h1>
                     <button className="bg-[var(--text-clr)] select-none text-[var(--bg-clr)] poppins_font h-[1.9rem] w-[7.5rem] rounded-[20rem] cursor-pointer text-[13px] py-[3px]">about me</button>
                  </div>
                  <p className="text-[var(--grayM)] text-[14px] mb-[1.9rem] leading-[25px]">I’m a frontend developer with a sharp eye for clean, minimal UI. I love crafting intuitive user interfaces using HTML, CSS, JavaScript and React and I often lean into Tailwind CSS for fast and consistent styling.</p>
                  <p className="text-[var(--grayM)] text-[14px] mb-[1.75rem] leading-[25px]">While frontend is where I started, I’m currently diving into backend development to become a more well-rounded developer. I’m learning PHP, laravel and exploring  SQL to better understand full-stack workflows.</p>
                  {/* <p className="text-[var(--grayM)] mb-[1.75rem] leading-[25px]">I enjoy creating minimal, responsive websites that focus on clarity and user experience with clean layouts, simple navigation and purposeful design choices.</p> */}
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