import axios from "axios";
import JSZip from "jszip";
async function loadJSON(port_name,jsonName = ['area','border','marker','lane']) {
  let json = {obj:{},array:[]};
  const res = await axios({
    method: "get",
    url: `/assets/json/${port_name}.zip`,
    responseType: "arraybuffer",
  });
  const data = res.data;
  const zip = await JSZip.loadAsync(data);
  const keys = Object.keys(zip.files);
  let promises = [];
  for (let iterator of jsonName) {
    for (let key of keys) {
        if (key.indexOf(iterator+'.') > -1) {
           promises.push(
            await new Promise((resolve, reject) => {
              zip
                .file(key)
                .async("string")
                .then((txt) => {
                  let obj = JSON.parse(txt);
                  json.obj[iterator] = obj;
                  json.array.push(obj);

                  resolve(obj);
                });
            })
          );
        }
      }
  }
  
  await Promise.all(promises);
  return {...json};
}

export default loadJSON;
