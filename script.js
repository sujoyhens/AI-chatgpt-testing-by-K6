import "./libs/shim/core.js";
import http from "k6/http";
// import { check } from "k6";

const url = "http://localhost:8000";
const Request = Symbol.for("request");

const username = JSON.parse(open('username.json'));
const audiofiles = [
  { name: '@bazi2493', files: 8, audio: null },
  { name: '@bulbul', files: 5, audio: null },
  { name: '@dpmath234', files: 5, audio: null },
  { name: 'Balamurugesan', files: 9, audio: null }
]
let audioFileContents = [];
audiofiles.forEach((item, index) => {
  for (let j = 1; j <= item.files; j++) {
    const filePath = `audio/${item.name}/${j}${item.name}.mp3`;
    const fileContent = http.file(open(filePath, 'b'), `${item.name}.mp3`);
    audioFileContents.push(fileContent);
  }
});


export let options = {
  vus: 25,
  iterations: 25,
  // duration:'30s', 
  // rate:100
};
postman[Symbol.for("initial")]({
  options
});

const userRoles = [
  "business_developer",
  "front_desk_executive",
  "management_trainee",
  "marketing_excutive",
  "sales_executive",
  "sales_manager",
  "software_developer"
]

export default function () {
  let datatoadd = "";
  // const fileIndex = __ITER % audiofiles.length;
  const audioFileContent = audioFileContents[Math.floor(Math.random() * 5)];
  const usernames = username[__VU];
  const userroles = userRoles[Math.floor(Math.random() * 5)];
  console.log('Test Started for ====> VU : ', __VU, ', Username : ', usernames, ", Userrole : ", userroles);
  
  const requestbody = {
    name: url + "/talktest",
    method: "POST",
    address: url + "/talktest",
    data: {
      file: audioFileContent,
      username: usernames,
      userrole: userroles
    },
    options: { timeout: '1200s' }
  };
  const response = postman[Request](requestbody);


  // datatoadd = `VU : ${__VU}, Username : ${usernames}, Userrole : ${userroles}, Response status :${response.status}, Duration (seconds): ${response.timings.duration / 1000}, Waiting time (seconds): ${response.timings.waiting / 1000}, Receiving time (seconds): ${response.timings.receiving / 1000}`;
  datatoadd = `${__VU},${usernames},${userroles},${response.status},${response.timings.duration / 1000},${response.timings.waiting / 1000},${response.timings.receiving / 1000}`;
  
  const headers = { 'Content-Type': 'text/plain' };

  http.post(`${url}/writetestreports`, datatoadd, { headers });
}

