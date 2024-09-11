import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portofolio from './components/portofolio/Portofolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Sidebar  />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portofolio />
      <Contact />
    </main>

    </>
  );
}

export default App;
