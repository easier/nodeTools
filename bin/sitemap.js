#! /usr/bin/env node
var fs = require('fs');

fs.readdir('.',function(err,files){
	var htmlfile;
	var str;
	var addwrapper;
	function html_filter(items){
		return items.split('.').pop() === 'html';
	}
	htmlfiles = files.filter(html_filter);
	addwrapper = function(item,index){
		 str += '<p><a href="'+ item +'">' + item +'</a></p>'
	}
	htmlfiles.forEach(addwrapper);
	console.log(str)
	fs.writeFile('page.html', str,'utf-8', function(err){
     // console.log(htmlfile);
      if (err) throw err;
      console.log('It\'s saved!');
  })

});



