const util = require("./index.js");
const fs = require("fs");

var printer = new util.Printer(25);

var fileName = printer.writeQuestion("Please input the filename for the generated JSON file (Inputting a filename that already exists will clear that file): ");
while(fileName === "" || fileName == null || fileName === "\n"){
		fileName = printer.writeQuestion("Please input a valid, nonempty string: ");
}
 fileName += ".json";
fs.writeFile(fileName, '', function(err){if(err) throw err;});
var objectCount = Number(printer.writeQuestion("Input the number of objects that loot will be calculated for: "));
while(isNaN(objectCount)||objectCount == 0){
		objectCount = printer.writeQuestion("Please input a valid number: ", 25);
}
var i = 0;
var contents = "{\n";
while(i < objectCount){
	var objectName = printer.writeQuestion("Input the name of the object at postition " + i + ": ");
	while(objectName === "" || objectName == null){
		objectName = printer.writeQuestion("Please input a valid, nonempty string: ");
	}
	contents += "\t\"" + objectName + "\" : {\n\t\t";
	var lootCount = Number(printer.writeQuestion("Input the amount of unique loot " + objectName + " can drop: "));
	while(isNaN(lootCount)||lootCount == 0){
		lootCount = printer.writeQuestion("Please input a valid number: ", 25);
	}
	var totalChance = 0;
	for(j = 0; j < lootCount; j++){
		if(lootCount > 1){
			var lootName = printer.writeQuestion("Input the name of the loot at position " + j + ": ");
			while(lootName === "" || lootName == null){
				lootName = printer.writeQuestion("Please input a valid, nonempty string: ");
			}
			if(j == lootCount-1){
				util.sPrint(lootName + " is the last piece of loot for " +  objectName + ", initializing drop chance to " + Number(100-totalChance) + "%", 25, true);
				lootChance = Number(100-totalChance);
			}
			else{
				var lootChance = Number(printer.writeQuestion("Input the percent (out of 100) that " + lootName + " will be dropped: "));
				while((isNaN(lootChance)||lootChance == 0)||(lootChance <= 0||lootChance >= 100)){
					lootChance = Number(printer.writeQuestion("Please input a valid number (0-100): ", 25));
				}
				totalChance += lootChance;
			}
			if(j == lootCount-1&&i == objectCount-1){
				contents += "\"" + lootChance + "\" : " + lootName + "\n\t}\n";
			}else if(j == lootCount-1&& i != objectCount-1){
				contents += "\"" + lootChance + "\" : " + lootName + "\n\t},\n";
			}else{
				contents += "\"" + lootChance + "\" : " + lootName + ",\n\t\t";
			}
		}else{
			var lootName = printer.writeQuestion("Input the name of the loot at position " + j + ": ");
			while(lootName === "" || lootName == null){
				lootName = printer.writeQuestion("Please input a valid, nonempty string: ");
			}
			util.sPrint("Only one piece of loot, initializing drop chance to 100%.", 25, true);
			if(j == lootCount-1&&i == objectCount-1)
				contents += "\"" + lootName + "\" : " + 100 + "\n\t}\n";
			else
				contents += "\"" + lootName + "\" : " + 100 + "\n\t},\n";
		}
	}
	i++;
}
contents += "\n}";
fs.writeFile(fileName, contents, function(err){if(err) throw err;});
util.sPrint("Loot table initialization complete you can find it in ./" + fileName, 25, true);
