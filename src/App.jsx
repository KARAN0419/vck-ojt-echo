import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPage";
import ContanctPage from "./pages/ContanctPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Karan Ankush 
          Chougule"
          studentPhotoUrl="/Images/karan.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPages/>}/>
          <Route path="/contact" element={<ContanctPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
      </Router>
      <ChatbotComponent/>
      <Footer/>
       </>
  )
}

export default App;

