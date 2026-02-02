import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
import Portfolio from './components/Portofolio';

function App() {
  return (
    <div className="bg-background text-text min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
