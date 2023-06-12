#!/usr/bin/node
const size = Math.floor(Number(process.agrv[2]));
if(sizeisNaN){
    console.log('Misssing size');
}
else{
    for (let r = 0; r < size; r++) {
        let row = '';
        for (let c = 0; c < size; c++) row += 'x';
        console.log(row);
    }
}
