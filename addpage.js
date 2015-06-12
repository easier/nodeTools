#!/usr/bin/env node
require('shelljs/global');

var filename = process.argv[2];
cd('view');

"define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){".to(filename+'View.js');
"\n".toEnd(filename+'View.js');
"\t123".toEnd(filename+'View.js');
"\n".toEnd(filename+'View.js');
"});".toEnd(filename+'View.js');
console.log('add' + filename + 'View.js was added!');

cd('..');
cd('controller');
"define(['utils/appFunc','utils/xhr','view/module','GS'],function(appFunc,xhr,VM,GS){".to(filename+'Ctrl.js');
"\n".toEnd(filename+'Ctrl.js');
"\n".toEnd(filename+'Ctrl.js');
"});".toEnd(filename+'Ctrl.js');
console.log('add' + filename + 'Ctrl.js was added!');
