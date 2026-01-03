import { useState } from 'react'
import {Navigation} from './components/Navigation'
import  Hero  from './components/Hero'
import  Proposition from './components/Proposition'
import { HowItWorks } from './components/HowItWorks'
import { Benefits } from './components/Benefits'
import { Programs }  from './components/Programs'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//         <Navigation/>
//         <Hero />
//         <Proposition />
//         <HowItWorks />
//         <Benefits />
//         <Programs />
//         <About />
//         <Contact />
//         <Footer />
//     </div>
//   )
// }

// export default App
export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <Proposition />
      <HowItWorks />
      <Benefits />
      <Programs />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}
