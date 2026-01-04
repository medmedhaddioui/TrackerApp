import { Hero } from '../components/Hero';
import { Proposition } from '../components/Proposition';
import { HowItWorks } from '../components/HowItWorks';
import { Benefits } from '../components/Benefits';
import { Programs } from '../components/Programs';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export default function HomePage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero scrollToSection={scrollToSection} />
      <Proposition />
      <HowItWorks />
      <Benefits />
      <Programs />
      <About />
      <Contact />
    </div>
  );
}
