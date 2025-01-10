import AnimatedWeekCounter from "./components/AnimateWeek";
import BootcampLogo from "./components/bootcampLogo";
import CodingAnimation from "./components/CodingAnimation";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Review from "./components/Review";
import Video from "./components/Video";
import WhySolp from "./components/WhySolp";

export default function App() {
  return (
    <>
    <CodingAnimation/>
    <BootcampLogo/>
    <AnimatedWeekCounter/>
    <Video/>
      {/* <WhySolp /> */}
      <Review />
      <WhySolp/>
     
      <Form/>
      <Footer/>
    
    </>
  )
}
