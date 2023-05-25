import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/create">Create a post</Link>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/create" element={ <CreatePost/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
