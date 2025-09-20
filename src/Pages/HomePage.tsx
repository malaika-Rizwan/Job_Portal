import Header from "../Header/Header";
import {DreamJob} from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Companies from "../LandingPage/Companines";
import Working from "../LandingPage/Working";
import Testimonial from "../LandingPage/Testimonial";
import Subscribe from "../LandingPage/Subscribe";
import Footer from "../Footer/Footer";



export const HomePage=()=>{
    return(
       <div className="main-h-[100vh] bg-mine-shaft-950 font-['poppines']">
          
           <DreamJob/>
           <Companies/>
           <JobCategory/>
          <Working/>
           <Testimonial/>
           <Subscribe/>
           
       </div>

    )
}
