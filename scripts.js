//Array of names that will be input
var list = [];
var copyList = [];
var matchup = {};

//Lists the names input 
function listPeople(form) {
	event.preventDefault();
	var input = form.elements[0].value;

	//Push name into array for randomizing
	list.push(input);

	$("ul").append("<li>" + input + "</li>");

	//Reset form after it has been submitted
	clearForm();
}

function clearForm() {
	document.getElementById("input-names").reset();
}

//Make a copy of the list
function makeList() {
	list.forEach(function (name) {
		copyList.push(name);
	});

	randomize();
}

//Flip flops the one element of the array with a random element
function randomize() {
	for (var i = copyList.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
        var temp = copyList[i];
        copyList[i] = copyList[j];
        copyList[j] = temp;
    }

    listCheck();
}

//Checks if any of the elements are matching
function listCheck() {
	for (var x = 0; x < list.length; x++) {
        if (list[x] == copyList[x]) {
        		randomize();
        }
    }

    makeHash();
}

//Make key/value pair with list and copy list
function makeHash() {
	for (var x = 0; x < list.length; x++) {
		matchup[list[x]] = copyList[x];
	}
}

//Tells person who their secret santa is once they click their name
$("ul").click(function(event) {
    var text = $(event.target).text();
    
    alert(matchup[text]);
});