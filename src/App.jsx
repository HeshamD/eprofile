import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/projects" element={<ProjectModel />} />
        <Route path="/contacts" element={<ContactModel />} />
        <Route path="/work_Experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/articles" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
