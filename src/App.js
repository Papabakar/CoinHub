
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/home-page";
import Dashboard from "./components/dashboard/dashboard";
import DashboardLogin from "./components/authentication/login";
import BlogDisplay from "./components/blog/blog-display";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<DashboardLogin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/:id" element={<BlogDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
