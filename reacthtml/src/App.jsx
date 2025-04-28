import Header from './components/Header';
import Footer from './components/Footer';
import START from './pages/START'; 
import Foretag from './pages/Foretag';
import Brollop from './pages/Brollop';
import Portfolio from './pages/Portfolio';
import Kontakt from './pages/Kontakt';
import Popup from './components/Popup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import "./App.css";
import { useState } from 'react';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header  />
        <Routes>
          <Route key="/" path="/startsidan" element={<START />} />
          <Route path="/brollop" element={<Brollop />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/foretag" element={<Foretag />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
        {isPopupOpen && <Popup closePopup={closePopup} />}
      </Router>
    </div>
  );
}
export default App;

