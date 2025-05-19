import { Routes, Route } from "react-router-dom";
import Header from "./comp/Header/Header";
import Footer from "./comp/Footer/Footer";
import Home from "./pages/home-page/Home";
import Services from "./pages/services/Services";
import SendRequest from "./pages/send-request/SendRequest";
import Projects from "./pages/projects-page/Projects";
import Prices from "./pages/prices-page/Price";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Blog from "./pages/blog-page/Blog";
import About from "./pages/about-Us/AboutUs";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        {/*####### تقديم طلب شراكة #######*/}
        <Route path="/request" element={<SendRequest />} />
      </Routes>
      <Footer />
    </>
  );
}
