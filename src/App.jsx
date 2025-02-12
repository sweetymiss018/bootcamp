import ConnectedCards from "./components/About";

import AnimatedWeekCounter from "./components/AnimateWeek";
import CodingAnimation from "./components/CodingAnimation";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Review from "./components/Review";
import ScrollToTop from "./components/ScrollToTop";
// import StudentList from "./components/StudentList";
import Video from "./components/Video";
import WhySolp from "./components/WhySolp";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <CodingAnimation />
      {/* <StudentList/> */}

      <AnimatedWeekCounter />
   
      <Video />
      <ConnectedCards/>
      <Review />
      <WhySolp />

      <Form />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}
