import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './pages/about/about';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </>
  );
}

export default App;
