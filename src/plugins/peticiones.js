import axios from "axios";
function parrotGet(tableName, method){
  return new Promise((resolve, reject) => {
    const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
    axios.get(uri)
      .then(r  => {resolve(r.data)})
      .catch(e => {reject(e)})
  })
}
export default parrotGet ;