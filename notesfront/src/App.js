import "./App.css";
import NotFound from "./NotFound";
import NotesList from "./NotesList";
import Navbar from "./Navbar";
import AddNote from "./AddNote";
import NoteDetails from "./NoteDetails";

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
        <Route path="/notes/:id" element={<NoteDetails></NoteDetails>}></Route>
        <Route path="/add" element={<AddNote />} />
        <Route path="/notes/edit/:id" element={<AddNote />} />
      </Routes>
    </Router>
  );
}

export default App;
