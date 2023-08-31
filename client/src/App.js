import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./auth/Login"

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;