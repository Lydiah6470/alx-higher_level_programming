#!/usr/bin/node
const callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++) theFunction();
  };
callMeMoby(3, function () {
  console.log('C is fun');
});
