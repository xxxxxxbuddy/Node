var fs = require('fs');

fs.readFile('./hello.txt', function(err, file){
    console.log(err);
    console.log('done')
});
console.log('Start reading...');