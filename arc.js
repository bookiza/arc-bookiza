import fs from 'graceful-fs'

export default function read (location) {
  return new Promise((resolve, reject) => {
    fs.readFile(location, (err, data) => {
      if (err) {
        let msg = "Did not find the arc!";
        reject(new Error(msg));
      }
      return resolve(data);
    });
  });
}