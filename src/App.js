import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/menu" Component={Menu} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
