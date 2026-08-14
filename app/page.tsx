import Navbar from "./components/hompage/Navbar";
import Hero from "./components/hompage/Hero";
import AvailabilityBanner from "./components/hompage/AvailabilityBanner";
import  Facilities from  "./components/hompage/Facilities"
import RoomTypes from "./components/hompage/RoomTypes";
import Footer from "./components/hompage/Footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
     

      <main className="w-full pt-16">
        <Hero />
    <AvailabilityBanner/>
 <Facilities/>
<RoomTypes/>

<Footer/>
      </main>
    </div>
  );
}