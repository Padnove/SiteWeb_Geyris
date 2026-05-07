import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home'
import HowItWorks from './components/CommentCaMarche'
import Navbar from './components/Navbar'
import CTA from './components/Cta'
import Pricing from './components/Tarifs';
import Footer from './components/footer';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </>
  );
}


function App() {

  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Comment-ça-marche" element={<HowItWorks />}></Route>
          <Route path="/Tarifs" element={<Pricing />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
