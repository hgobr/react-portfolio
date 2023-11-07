import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Error from './pages/error/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
