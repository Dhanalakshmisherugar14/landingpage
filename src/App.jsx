
import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MandatorySection from './components/MandatorySection';
import Streamlined from './components/Streamlined';
import Apply from './components/Apply';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';

function App() {


  return (
    <>
    <div>
      <Navbar />
      <HeroSection />
      <MandatorySection />
      <Apply />
      <Streamlined />
      <ServicesSection />
      <Footer />
    </div>
      
    </>
  )
}

export default App
