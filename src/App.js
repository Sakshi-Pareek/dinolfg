import './App.css';
import { useEffect, useState } from 'react';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import HeaderSEC from './components/HeaderSEC';
import Preloader from './components/Preloader';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import BackToTop from './assets/images/webp/BackToTop.webp'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);
  // ========================back-to-top=======================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSEC />
            <Tokenomics />
            <Utility />
            <Roadmap />
            <Faqs />
            <Footer />
            <div className={`${backToTop ? "back_to_top shadow-[0_6px_15px_rgba(142,198,39,1)] overflow-hidden fixed bottom-[3%] h-[43px] w-[43px] flex items-center justify-center rounded-[50%] bg-[#0A4740] cursor-pointer border-2 border-[#8ec627e7] animate-bounce right-[2%] z-[2]" : "d-none"}`} onClick={() => top()}><img
              src={BackToTop}
              alt="BackToTop" className='w-[20px]'
            /></div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
