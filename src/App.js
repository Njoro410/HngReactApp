import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/contact'  element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
