#!/usr/bin/env node

var arr = []; 

for ( i = 1; i<30; i++ ){
	var random_num = Math.floor(Math.random()*100);
	console.log(random_num);
	var compare = arr.indexOf(random_num);
	if( compare < 0 ){
		arr.push(random_num);
	}
}

console.log(arr);
arr.sort(function(a,b){return a>b?1:-1});
console.log(arr);
