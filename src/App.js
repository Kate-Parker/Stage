import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderDrawer from './components/HeaderDrawer';
import Header from './components/Header';
import SubMenu from './pages/SubMenu';
import FaceMask from './pages/FaceMask';
import BufferCap from './pages/BufferCap';
import Equipment from './pages/Equipment';
import Ventilator from './pages/Ventilator';
import HandWash from './pages/HandWash';
import Sanitizer from './pages/Sanitizer';
import Bandages from './pages/Bandages';
import BPMachine from './pages/BPMachine';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';



function App() {
return (
    <Router>
      <Header/>
      <HeaderDrawer/>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/submenu" element={<SubMenu />} />
          <Route path="/facemask" element={<FaceMask />} />
          <Route path="/buffercap" element={<BufferCap />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/ventilator" element={<Ventilator />} />
          <Route path="/handwash" element={<HandWash />} />
          <Route path="/sanitizer" element={<Sanitizer />} />
          <Route path="/bandages" element={<Bandages />} />
          <Route path="/bpmachine" element={<BPMachine />} />
        </Routes>
        <Footer/>
    </Router>
  
  );
}
export default App;

