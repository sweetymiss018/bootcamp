import AnimatedWeekCounter from "./components/AnimateWeek";
import CodingAnimation from "./components/CodingAnimation";
import Form from "./components/Form";
import Review from "./components/Review";
import Video from "./components/Video";
import WhySolp from "./components/WhySolp";

export default function App() {
  return (
    <>
    <CodingAnimation/>
    <AnimatedWeekCounter/>
    <Video/>
      {/* <WhySolp /> */}
      <Review />
      <WhySolp/>
     
      <Form/>
    
    </>
  )
}
