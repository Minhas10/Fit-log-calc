
import Image from "next/image";

import Banner from "../components/Banner";
import WorkoutsPage from "../components/workoutsLibrary/page";


export default function Home() {
  return (
    <div>
      <Banner/>
      <WorkoutsPage/>
    </div>
  );
}
