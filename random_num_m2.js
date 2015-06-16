#!/usr/bin/env node
var arr = []; 

for ( i = 1; i<10; i++ ){
	var random_num = Math.floor(Math.random()*100);
	var compare = arr.indexOf(random_num);
	if( compare < 0 ){
		arr.push(random_num);
	}
}

// 冒泡排序

function bubbleSort(array){
	var i = 0;
	var len = array.length;
	var t; // temp
	var i,j;
	for (; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (array[i] < array[j]) {
                t = array[j];
                array[j] = array[i];
                array[i] = t;
            }
        }
    }
}

console.log(arr);
bubbleSort(arr);
console.log(arr);
