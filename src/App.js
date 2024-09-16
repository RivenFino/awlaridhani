import './App.css';
import { useTranslation } from 'react-i18next';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';

function App() {
  return (
    <div className='App'>
      <Router>
      <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
    // <>
    //   <main className='main'>
    //   <LanguageButton />
    //     <Home />
    //     <About />
    //     <Services />
    //     <Portofolio />
    //     <Resume />
    //     <Contact />
    //     <Footer/>
    //   </main>
    // </>
  );
}

export default App;
