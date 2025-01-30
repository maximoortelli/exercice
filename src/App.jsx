import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentsPage from "./pages/CommentsPage";
import "./index.css";
import "@fontsource/roboto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

