import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPage";
import ContanctPage from "./pages/ContanctPage";

const App = () => {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContanctPage/>}/>

        </Routes>
      </Router>
      </>
  )
}

export default App;
