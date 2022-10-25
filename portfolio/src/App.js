import './App.css';
// import { AllRoutes } from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';
import { About } from './Pages/About';
import { Banner } from './Pages/Banner';
import { Contact } from './Pages/Contact';
import { Footer } from './Pages/Footer';
import { Projects } from './Pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
