import httpClient from "./http-common"; //first we have to import the module which we have expported as a defauld module
//we have create NoteService js file to make hppt requests
const getAll = () => {
  return httpClient.get("/notes");
};
export default { getAll }; //we will export this a a name function
