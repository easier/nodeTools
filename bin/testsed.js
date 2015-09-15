#!/usr/bin/env node
require('shelljs/global');

ls('*.js').forEach(function(file) {
  sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
  // sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
});
