var names = "";
var list = [];
var copyList = [];
var pairs = {};

//prompts for names 
function namesPrompt() {
	names = prompt("Who is going to be a part of SS?");
	list = names.split(",");
	for (name in list) {
		copyList.push(list[name]);
	}
}

//This function makes an object where the element in array 1 is the key
//and the element in array 2 is the value
function combine(hash,array1,array2) {
	for (var x = 0; x < array1.length; x++) {
		if (array1[x] == array2[x]) {
			hash[array1[x]] = array2[x+1];
		} else {
			hash[array1[x]] = array2[x];
		}
		console.log(hash);
	}
}

//once everything is completed, and someone clicks the button
//one of the two lists will be shuffled and it will be verified if
//identical elements have identical positions
$(function() {
	namesPrompt();
	$(".wrapper button").click(function() {
		for (var i = copyList.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
        	var temp = copyList[i];
        	copyList[i] = copyList[j];
        	copyList[j] = temp;
        }
        combine(pairs,list,copyList);
        console.log(copyList);
        console.log(list);
	});
});


//create function that makes a hash of the copyList and list arrays
//create input field with submit button 
//evaluate which key makes the input from the input field
	//alert("Your Secret Santa is " + value)