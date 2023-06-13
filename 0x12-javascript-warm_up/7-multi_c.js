#!/usr/bin/node
const x = Math.floor(Number(process.argv[2]));
if(isNaN(x)){
    console.log('Missing number of occurrences');
}
else{
    let i = 0;
    for(i= 0; i<x; x++){
        console.log('C is fun');
    }
}
