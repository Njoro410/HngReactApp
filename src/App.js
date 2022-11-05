import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/contact'  element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
