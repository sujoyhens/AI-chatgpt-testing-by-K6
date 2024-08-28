// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'


const audiofiles = [
  { name: '@bazi2493', files: 8, audio: null }
]
let audioFileContents = [];

audiofiles.forEach((item, index) => {
  for (let j = 1; j <= item.files; j++) {
    const filePath = `audio/${item.name}/${j}${item.name}.txt`;
    const fileContent = open(filePath);
    audioFileContents.push(fileContent);
  }
});
let respdata = [];



export const options = {
  // "stages": [
  //   {
  //     "duration": "2s",
  //     "target": 20
  //   },
  //   {
  //     "duration": "20s",
  //     "target": 100
  //   },
  //   {
  //     "duration": "50s",
  //     "target": 50
  //   }
  // ]
}


export default function main() {
  let response

  group('test1', function () {
    // const username = 'testuserforvoicetest' + __VU;
    // const emailid = 'testuserforvoicetest' + __VU + '@gmail.com';
    const username='sujoy test1';
    const emailid='sujoy1@gmail.com'
    // const coursecode = 'kcQpGI236354';
    const coursecode = '4utGYx237880';

    const audiodata = audioFileContents[Math.floor(Math.random() * 5)];
    let body;
    let resp;

    try {
      // response = http.post(
      //   'http://localhost:8088/student/studentdetails',
      //   '{"username":"' + username + '","email":"' + emailid + '","caller":"webstudent","usermode":"student","password":"123456","coursecode":"' + coursecode + '","action":"save"}',
      //   {
      //     headers: {
      //       accept: 'application/json, text/plain, */*',
      //       'content-type': 'application/json',
      //       referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
      //       'user-agent':
      //         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      //       'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      //       'sec-ch-ua-mobile': '?0',
      //       'sec-ch-ua-platform': '"Windows"',
      //     },
      //   }
      // )
      // body = response.body;
      // response = JSON.parse(body);
      // console.log('resp1', response);
      response = http.post(
        'http://localhost:8088/student/fetchstudentdetails',
        '{"email":"' + emailid + '","caller":"webstudent","usermode":"student","searchtype":"ongoing","searchcontent":""}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      body = response.body;
      response = JSON.parse(body);
      console.log('resp2', response);
      if (response && response.resultList) {

        const coursedetailsid = response.resultList[0].coursedetailsid;
        const studentsectionid = response.resultList[0].studentsectionid;


        // response = http.post(
        //   'http://localhost:8088/student/fetchsnapshot',
        //   '{"email":"'+emailid+'","caller":"webstudent","usermode":"student","searchtype":"fetchlaststep","studentsectionid":'+studentsectionid+',"coursecode":"'+coursecode+'","numberofattempts":1}',
        //   {
        //     headers: {
        //       accept: 'application/json, text/plain, */*',
        //       'content-type': 'application/json',
        //       referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
        //       'user-agent':
        //         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        //       'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        //       'sec-ch-ua-mobile': '?0',
        //       'sec-ch-ua-platform': '"Windows"',
        //     },
        //   }
        // )

        // response = http.post(
        //   'http://localhost:8088/kpi/kpiwithattempts',
        //   '{"email":"'+emailid+'","usermode":"student","caller":"webstudent","action":"save","kpiwithattempts":{"kpioflastattempts":0,"kpioflastattempts1":0,"kpioflastattempts2":0,"studentsectionid":'+studentsectionid+',"coursecode":"'+coursecode+'","numberofattempts":"1","userregisterid":12997}}',
        //   {
        //     headers: {
        //       accept: 'application/json, text/plain, */*',
        //       'content-type': 'application/json',
        //       referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
        //       'user-agent':
        //         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        //       'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        //       'sec-ch-ua-mobile': '?0',
        //       'sec-ch-ua-platform': '"Windows"',
        //     },
        //   }
        // )

        // response = http.post(
        //   'http://localhost:8088/student/updatetandc',
        //   '{"email":"'+emailid+'","usermode":"student","action":"termsandcondition","termsandcondition":"yes","studentsectionid":'+studentsectionid+',"caller":"webstudent"}',
        //   {
        //     headers: {
        //       accept: 'application/json, text/plain, */*',
        //       'content-type': 'application/json',
        //       referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
        //       'user-agent':
        //         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        //       'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        //       'sec-ch-ua-mobile': '?0',
        //       'sec-ch-ua-platform': '"Windows"',
        //     },
        //   }
        // )

        response = http.post(
          'http://localhost:8088/voiceconversation/fetchvoiceconversation',
          '{"email":"' + emailid + '","usermode":"student","caller":"webstudent","searchtype":"studentsectionid","coursedetailsid":' + coursedetailsid + ',"coursename":"negotiationinterviewcourse","coursecode":"' + coursecode + '","roundno":"1","studentsectionid":' + studentsectionid + '}',
          {
            headers: {
              accept: 'application/json, text/plain, */*',
              'content-type': 'application/json',
              referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
              'user-agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
              'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
            },
          }
        )
        if (response) {
          body = response.body;
          response = JSON.parse(body);
          let voiceconversationid = null;
          if (response && response.resultList) {
            // const fileurl = response.resultList[0].fileurl;
            voiceconversationid = response.resultList[0].voiceconversationid;
            // if (fileurl) {
            //   response = http.get(fileurl, {
            //     headers: {
            //       accept: 'application/json, text/plain, */*',
            //       referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
            //       'user-agent':
            //         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            //       'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            //       'sec-ch-ua-mobile': '?0',
            //       'sec-ch-ua-platform': '"Windows"',
            //     },
            //   })
            // } else {
            // console.log('fileurl :' + fileurl);
            // }
          }

          if (voiceconversationid) {
            response = http.post(
              'http://localhost:8088/voiceconversation/cudvoiceconversation',
              '{"email":"' + emailid + '","usermode":"student","caller":"webstudent","roundno":"1","voiceconversationid":"' + voiceconversationid + '","spendtime":43,"audiodata":"' + audiodata + '"}',
              {
                headers: {
                  accept: 'application/json, text/plain, */*',
                  'content-type': 'application/json',
                  referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
                  'user-agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
                  'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
                  'sec-ch-ua-mobile': '?0',
                  'sec-ch-ua-platform': '"Windows"',
                },
              }
            )
            body = response.body;
            resp = JSON.parse(body);
            let resulttowrite = `${__VU},${username},${emailid},${response.status},${response.status_text},${Number((response.timings.duration / 1000).toFixed(2))},${Number((response.timings.waiting / 1000).toFixed(2))},${Number((response.timings.receiving / 1000).toFixed(2))}`;
            console.log(resulttowrite)
            const headers = { 'Content-Type': 'text/plain' };
            // http.post(`http://localhost:3050/writefile`, resulttowrite, { headers });
          } else {
            let resulttowrite = 'voiceconversationid not found for ' + username;
            console.log(resulttowrite)
            const headers = { 'Content-Type': 'text/plain' };
            // http.post(`http://localhost:3050/writeerrors`, resulttowrite, { headers });
          }
        } else {
          let resulttowrite = 'fetchvoiceconversation api failed for username : ', username;
          console.log(resulttowrite)
          const headers = { 'Content-Type': 'text/plain' };
          // http.post(`http://localhost:3050/writeerrors`, resulttowrite, { headers });
        }
      } else {
        let resulttowrite = 'course details and student section id not found for the student ' + username;
        console.log(resulttowrite)
        const headers = { 'Content-Type': 'text/plain' };
        // http.post(`http://localhost:3050/writeerrors`, resulttowrite, { headers });
      }
    }
    catch (e) {
      console.log('error', e);
      let resulttowrite = 'error :' + e;
      console.log(resulttowrite)
      const headers = { 'Content-Type': 'text/plain' };
      // http.post(`http://localhost:3050/writeerrors`, resulttowrite, { headers });
    }
  })

  // Automatically added sleep
  sleep(1)
}

