import httpClient from "./http-common"; //first we have to import the module which we have expported as a defauld module
//we have create NoteService js file to make hppt requests
const getAll = () => {
  return httpClient.get("/notes");
};

const create = (data) => {
  return httpClient.post("/notes", data);
};
const get = (id) => {
  return httpClient.get(`/notes/${id}`);
};
const remove = (id) => {
  return httpClient.delete(`/notes/${id}`);
};

const update = (data) => {
  return httpClient.put("/notes", data);
};

export default { getAll, create, get, remove, update }; //we will export this a a name function
