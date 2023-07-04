import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/projects/Project";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Blog from "./pages/Blog";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/work_Experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/articles" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
