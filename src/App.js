import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CharSelection from "./components/pages/CharSelection";
import NewChar from "./components/pages/NewChar";
import Register from "./components/pages/Register";
import Login from "./components/pages/LoginPage";
import { UserProvider } from "./contextes/UserContext";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/charselection" element={<CharSelection />} />
            <Route path="/newchar" element={<NewChar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
