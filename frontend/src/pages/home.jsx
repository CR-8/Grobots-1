import Hero from "../components/Hero.jsx";
import TeamSection from "../components/TeamSection.jsx";
// import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer.jsx";
import IntroSection from "../components/Club-intro.jsx";

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
