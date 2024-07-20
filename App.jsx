import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import FirstPage from "./FirstPage.jsx";
import SocialIcon from "./SocialIcon.jsx";
function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/socialicon" element={<SocialIcon />} />

    </Routes>
    </>
  )
}

export default App;