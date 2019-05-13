import github from './github';
import fs from 'fs';
import os from 'os';

let imageHostedConfig = {};
let file = {};

const loadConfig = () => {
  fs.readFile('~/.putrc'.replace('~', os.homedir()), 'utf8', (err, data) => {
    if (err) {
      console.log('The ~/.putrc does not exist, please create one');
      process.exit(1);
    } else {
      imageHostedConfig = JSON.parse(data);
      readFile();
    }
  });
};

const readFile = () => {
  fs.readFile(process.argv[2], (err, data) => {
    const filename = process.argv[2];
    if (err) {
      console.log(`${filename} doesn't exist`);
      process.exit(1);
    } else {
      const name = filename.split('/');
      file = {
        name: name[name.length - 1],
        data: data.toString('base64')
      };
      uploader();
    }
  });
};

const uploader = () => {
  const res = github.upload(file, imageHostedConfig.github);
  res
    .then((data) => {
      console.log(data.url);
    })
    .catch(() => {
      console.log(`${file.name} can't not be uploaded twice`);
    });
};

loadConfig();
