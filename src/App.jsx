import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Packages from './components/Packages.jsx';
import Dashboard from './components/Dashboard.jsx';
import Ecosystem from './components/Ecosystem.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import Particles from './components/Particles.jsx';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-racing-black text-racing-ice">
      <div className="gamer-backdrop" aria-hidden="true" />
      <Particles />
      <Header />
      <Hero />
      <Benefits />
      <Packages />
      <Dashboard />
      <Ecosystem />
      <CTA />
      <Footer />
    </main>
  );
}
