// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group(
    'page_1 - https://172-105-35-187.ip.linodeusercontent.com/auth/common/termandcondition',
    
    function () {
      response = http.post(
        'https://172-232-105-137.ip.linodeusercontent.com:8088/voiceconversation/fetchvoiceconversation',
        '{"email":"interviewstd13march@gmail.com","usermode":"student","caller":"webstudent","searchtype":"studentsectionid","coursedetailsid":236364,"coursename":"negotiationinterviewcourse","coursecode":"kcQpGI236354","roundno":"1","studentsectionid":236370}',
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


      response = http.post(
        'https://172-232-105-137.ip.linodeusercontent.com:8088/voiceconversation/cudvoiceconversation',
        '{"email":"interviewstd13march@gmail.com","usermode":"student","caller":"webstudent","roundno":"1","voiceconversationid":"47","spendtime":27,"audiodata":""}',
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

      response = http.get(
        'https://in-maa-1.linodeobjects.com/elearningmaterial/voicebased/47.txt',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://172-232-105-137.ip.linodeusercontent.com:8088/student/updatecourseattempt',
        '{"email":"interviewstd13march@gmail.com","usermode":"student","caller":"student","action":"update","coursecode":"kcQpGI236354","spreadsheetid":""}',
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


      response = http.post(
        'https://172-232-105-137.ip.linodeusercontent.com:8088/maillog/drivemaillog',
        '{"email":"boenciadmin@gmail.com","usermode":"boenciadmin","caller":"boenciadmin","drivemaillog":{"driveemail":"","userregisterid":236369,"coursedetailsid":236364,"courseattempt":3,"action":"save","status":"exit"}}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/Json',
            referer: 'https://172-105-35-187.ip.linodeusercontent.com/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )


      response = http.post(
        'https://172-232-105-137.ip.linodeusercontent.com:8088/student/fetchstudentdetails',
        '{"email":"interviewstd13march@gmail.com","caller":"webstudent","usermode":"student","searchtype":"ongoing","searchcontent":""}',
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
    }
  )

  // Automatically added sleep
  sleep(1)
}
