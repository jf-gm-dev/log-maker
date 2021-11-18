import log from './index';

log.logMessage({
  title: "Testing",
  message: "Hello world",
});

log.logMessage({
  title: "Testing",
  message: "Hello world",
  directory: './',
  filename: 'test.txt',
});

log.logMessage({
  title: "Testing",
  message: "Hello world",
  directory: './',
  filename: 'test2.txt',
  withSeparator: false,
  customSeparator: "- - - - - - - - - - - -",
  withDate: false,
  withId: false
});
