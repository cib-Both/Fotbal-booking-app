import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import Home from './pages/Home';
import ConnectWithUs from './pages/ConnectWithUs';
import Matchs from './pages/Matchs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matchs />} />
            <Route path="/booking/:id" element={<BookingForm />} /> 
            <Route path="/connect" element={<ConnectWithUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
