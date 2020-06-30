import axios from "axios";
async function parrotGet(tableName, method){
  const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
  axios.get(uri)
    .then(r => {return r.data})
    .catch(e => {return e});
  }
export default parrotGet ;