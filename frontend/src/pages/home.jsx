import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
// import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import IntroSection from "../components/Club-intro";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <IntroSection />
      <TeamSection />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}
