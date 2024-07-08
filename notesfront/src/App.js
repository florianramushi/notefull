import "./App.css";
import NotFound from "./NotFound";
import NotesList from "./NotesList";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
