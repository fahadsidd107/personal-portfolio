import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Social from "./components/Socials";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
const App = () => {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling on close
  };

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  };

  useEffect(() => {
    if (window.location.hash === '#projects') {
      handleOpenModal();
    }
  }, [window.location.hash]);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      {showModal && <Modal handleClose={handleCloseModal} />}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <Social/>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
