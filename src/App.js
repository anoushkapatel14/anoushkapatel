import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="about" element={<ProjectsPage />} />

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
