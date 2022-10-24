import './App.css';
// import { AllRoutes } from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';
import { About } from './Pages/About';
import { Banner } from './Pages/Banner';
import { Projects } from './Pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
    </>
  );
}

export default App;
