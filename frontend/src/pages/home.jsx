import Hero from "../components/hero.jsx";
import TeamSection from "../components/TeamSection.jsx";
// import ContactForm from "../components/ContactForm";
import Footer from "../components/footer.jsx";
import IntroSection from "../components/club-intro.jsx";

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
