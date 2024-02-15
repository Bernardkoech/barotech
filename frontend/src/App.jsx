import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import BarotechNavbar from "./components/Navbar/BarotechNavbar";
import WhatsAppChat from "./components/Whatsapp/Whatsapp";

const App = () => {
  return (
    <div>
      <BarotechNavbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      
      <Contacts />
      <WhatsAppChat />
    </div>
  );
};

export default App;
