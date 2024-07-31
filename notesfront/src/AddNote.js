import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import NotesService from "./NotesService";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("programming");
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState(false);
  const saveNote = (e) => {
    e.preventDefault();
    if (!title || !body) {
      setErrors(true);
      return;
    }
    const note = { title, body, category, id };
    if (id) {
      //call the service update method
      NotesService.update(note)
        .then((response) => {
          console.log("Note updated successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //call the service create method
      NotesService.create(note)
        .then((response) => {
          console.log("Note added successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("something went wroing", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      NotesService.get(id)
        .then((note) => {
          setTitle(note.data.title);
          setBody(note.data.body);
          setCategory(note.data.category);
        })
        .catch((error) => {
          console.log("SOMETTHING WENT WRONG", error);
        });
    }
  }, []);

  return (
    <div className="create">
      <div className="text-center">
        <h5>{id ? "Update note" : "Add New Note"}</h5>
        {errors && (
          <span style={{ color: "red", fontStyle: "italic" }}>
            Please enter the mandatory fields
          </span>
        )}
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="title">
            Note Title: <sup>*</sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">
            Note Description: <sup>*</sup>
          </label>
          <textarea
            id="body"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Note Category:</label>
          <select
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="programming">Programming</option>
            <option value="vacation">Vacation</option>
            <option value="meeting">Meeting</option>
            <option value="blogging">Blogging</option>
          </select>
        </div>
        <div className="text-center">
          <button onClick={(e) => saveNote(e)}>
            {id ? "UpdateNote" : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNote;
