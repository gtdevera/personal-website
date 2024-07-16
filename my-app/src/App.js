import './App.css';
import HomePage from './components/Homepage';
import About from './components/About';
import ResponsiveAppBar from './components/Topbar';
import Deepdive from './components/Deepdive';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/deepdive" element={<Deepdive/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
