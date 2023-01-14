import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contect from "./components/Contect"
import Services from "./components/Services"



import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contect.scss"
import "./styles/Mediaquery.scss"



function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Services" element={<Services />} />

      </Routes>
      <Footer />
    </Router>



  )
}

export default App