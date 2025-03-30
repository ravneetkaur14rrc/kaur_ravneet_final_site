import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Skills from './Pages/Skills';
import Resources from './Pages/Resources';
import Setup from './Pages/Setup';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/setup" element={<Setup />} />
    </Routes>
  );
}