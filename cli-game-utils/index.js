const readline = require("readline-sync");

class Printer{

	
	constructor(defaultCharDelay){
		this.defaultCharDelay = defaultCharDelay;
	}

	writeQuestion(query, charDelay){

		if(typeof charDelay == undefined){charDelay = defaultCharDelay}
		else {charDelay = charDelay};

		exports.sPrint(query, charDelay, false);
		var input = readline.question();
		
		return input;

	}

}

exports.Printer = Printer;

exports.printer = new Printer(100);

exports.sPrint = function(input, delay, endNewline) {
	if (typeof delay == undefined) {delay = 100}
	else {delay = delay};
	if(typeof endNewline == undefined) {endNewline = true}
	else {endNewline = endNewline};
	var arr = [];
 	for (i = 0; i < input.length; i++){

 		arr[i]=input[i];
			
		}
	arr.forEach(function(element){

		process.stdout.write(element);
		exports.sleep(delay);

	});
	if(endNewline == true) {console.log('');}
}

exports.sleep = function(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}