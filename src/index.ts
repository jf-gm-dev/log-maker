import fs from 'fs';
import path from 'path';
import { LogMessageInterface } from './interfaces';

async function writeFile(dir: string, text: string) {

  await fs.appendFile(dir, text, function (err) {
    if (err) console.log(err);
  });

}

function getDefaultValues() {
  var dateTime = new Date();
  let logId = Math.random().toString(36).substring(4);

  return {
    dateTime,
    logId
  }
}

function logMessage(data: LogMessageInterface) {
  const {
    title,
    message,
    directory = './',
    filename = 'log.txt',
    withId = true,
    withDate = true,
    withSeparator = true,
    customSeparator = ''
  } = data;
  const { dateTime, logId } = getDefaultValues();

  var text = '';

  if(withSeparator && !customSeparator) {
    text += `\n# # # # # # # # # # # # # # # # # # # # # # #`;
  } else if(customSeparator) {
    text += `\n${customSeparator}`;
  }
  
  if(withId && title) {
    text += `\n${title} - Code : ${logId}`;
  } else if(withId) {
    text += `\nId : ${logId}`;
  } else if(title) {
    text += `\n${title}`;
  }

  if(withDate) {
    text += `\n${dateTime}`;
  }

  if(message) {
    text += `\n${message}`;
  }

  text += `
  `;
  
  var dir = path.join(directory, filename);
  writeFile(dir, text);
}

export default {
  logMessage,
  writeFile
}