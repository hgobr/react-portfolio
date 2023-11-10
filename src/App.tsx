import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import './index.scss';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
