'use strict';

const errorHandler = require('./error');

module.exports = function(app) {
  if (process.argv.indexOf('--static') !== -1) {
    console.log('Configuring server app with static middleware.');
    require('./static')(app);
  } else {
    console.log('Configuring server app with SSR middleware.');
    require('./ssr')(app);
  }

  errorHandler(app);
};
