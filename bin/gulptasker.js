#!/usr/bin/env node
require('shelljs/global');
var request = require('request');
var fs = require('fs');
var cheerio = require("cheerio");

var taskname = process.argv[2];
//request('http://7lrxoq.com1.z0.glb.clouddn.com/package.json').pipe(fs.createWriteStream('package.json'));
console.log(__filename);
console.log(__dirname);
var etrans = function(argument) {
    // body...
}
fs.readFile('*.html', function (err, data) {
  if (err) throw err;
  //console.log(data);
  var $ = cheerio.load(data);
  var content = $('body').children().eq(2);
  var addwrapper = $('<div></div>').append(content).html();
  console.log(addwrapper);
  fs.writeFile('some.html',addwrapper,'utf8');

});
