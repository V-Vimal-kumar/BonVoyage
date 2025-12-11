// src/pages/Home.jsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Steps from "../components/Steps";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Steps />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </>
  );
}
