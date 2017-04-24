// JavaScript Document

(function() {

//Mobile nav drop down
var Forms = document.querySelectorAll(".CMSform");
var allForms = document.querySelectorAll(".CMSformButton");

console.log(allForms);

function formChange() {
	console.log("clicked");

	/*[].forEach.call(allForms, function(formSelected) {
		formSelected.classList.remove("current");
	});

	var form = this.id;

	this.classList.add("current");*/
}

[].forEach.call(allForms, function(selectedForm) {
selectedForm.addEventListener('click', formChange, false);});


})();
