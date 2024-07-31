import { useEffect, useState } from "react";
import NotesService from "./NotesService";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const NotesList = () => {
  //we gone create this function stateles component
  const [notes, setNotes] = useState([]); //in useState hook will provide initial value, first value notes

  //the use effect will run once very first tim when the component is rendered and use state changed
  useEffect(() => {
    //useEffect hook does not return anything but take a function as an argument

    NotesService.getAll()
      //inside this we gone call http get request this will return a promise and we call that method to handle this promise and this will return the response. the response contain proper data
      .then((response) => {
        console.log("printing resposne", response.data);
        setNotes(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []); //[]we gone pass an empyt array , and if do not pass empty array each time whenever the state changes this will start calling get all method we dont want to do that
  //thats why we re going to pass an empty array so that usse effect  this huge effort will run only once very fast, the next time when state changes this will not run because we have provided empyt array as dependency

  return (
    //next we gone return and html inside render method
    <div className="main-content">
      <h4>List of Notes</h4>
      <div className="notes-list mt-4">
        {notes &&
          notes.map((note) => (
            <div key={note.id} className="notes-preview mt-3">
              <Link to={`/notes/${note.id}`}>
                <h5 className="primary-color text-capitalize">{note.title}</h5>
                <Moment fromNow className="text-italic">
                  {note.updatedAt}
                </Moment>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotesList;
