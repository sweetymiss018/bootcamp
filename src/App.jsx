import BootcampForm from "./components/BootcampForm";
import Review from "./components/Review";
import SOLPCodingExperience from "./components/SolpExpeirience";
import CountdownTimer from "./components/TimmerComponents";
import WhySolp from "./components/WhySolp";

export default function App() {
  return (
    <>
      <SOLPCodingExperience/>
      <WhySolp />
      <Review />
      <CountdownTimer/>
      <BootcampForm/>
    </>
  )
}
