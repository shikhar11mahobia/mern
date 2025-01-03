import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddNote from './pages/AddNote';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNote />} />
    </Routes>
  </Router>
);

export default App;