import Navbar from "./Navbar";
import Footer from "./Footer";
import Faq from "./Faq";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import PartnerLogo from "./PartnerLogo";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PartnerLogo />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
