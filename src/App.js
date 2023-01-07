
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/home-page";
import Dashboard from "./routes/dashboard/dashboard";
import DashboardLogin from "./components/authentication/login";
import BlogDisplay from "./components/blog/blog-display";
import Article from "./components/blog-component/article";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<DashboardLogin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
