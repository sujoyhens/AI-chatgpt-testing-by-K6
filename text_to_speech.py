from gtts import gTTS
import os
import json

def text_to_speech(foldername,filename,text):
    try:
        output_path='audio/'+foldername
        tts = gTTS(text=text, lang='en', slow=False)
        os.makedirs(output_path, exist_ok=True)
        output_file = os.path.join(output_path, filename+'.mp3')
        tts.save(output_file)
        print(f'Text-to-speech conversion complete. Audio file saved as {filename}')
    except:
        print("exception.")

def read_file(username):
    try:
        if username !="":
            with open(f"db/{username}_db.json", "r") as json_file:
                data = json.load(json_file)
                if data:
                    msgno=0
                    for item in data:
                        role=item.get("role")
                        if role=="user":
                            msgno=msgno+1
                            filename=str(msgno)+username
                            content = item.get("content")
                            print(filename+" : ", content )
                            text_to_speech(username,filename,content)
                else:
                    print("No data found")
    except:
        print("exception.")

def main():
    read_file('Balamurugesan')

main()