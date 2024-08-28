const fs = require('fs');
const path = require('path');

// Directory containing MP3 files
const directory = './audio/@bazi2493/';

// Read the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Loop through each file
  files.forEach((file) => {
    // Check if file is an MP3 file
    if (file.endsWith('.mp3')) {
      // Read the MP3 file
      fs.readFile(path.join(directory, file), (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        // Convert the MP3 data to Base64
        const base64Data = Buffer.from(data).toString('base64');

        // Write the Base64 string to a text file
        const textFileName = file.replace('.mp3', '.txt');
        fs.writeFile(path.join(directory, textFileName), base64Data, (err) => {
          if (err) {
            console.error('Error writing file:', err);
            return;
          }
          console.log(`Base64 data for ${file} has been written to ${textFileName}`);
        });
      });
    }
  });
});
