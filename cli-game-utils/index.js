exports.sPrint = function(input, delay) {
	if (typeof delay == "undefined") {charDelay = 100}
	else {charDelay = delay};
	var arr = [];
 	for (i = 0; i < input.length; i++){

 		arr[i]=input[i];
			
		}
	arr.forEach(function(element){

		process.stdout.write(element);
		exports.sleep(charDelay);

	});
	console.log('');
}

exports.sleep = function(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}