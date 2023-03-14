/*
     two-htmlcells.js - version 0.1
     Creator - Madhukumar Seshadri 
*/

//form
form = function () {
	this.myelement = document.createElement("form");
	this.myelement.method="POST"
	this.myelement.action=document.URL
}
form.prototype.setid = function (withid) {
	this.myelement.id=withid;
}
form.prototype.htmlelement=function () {
	return this.myelement
}
form.prototype.setaction = function (action) {
	this.myelement.action = action;
}
form.prototype.setname = function (name) {
	this.myelement.name = name;
}
form.prototype.setencodingtype = function (enctype) {
	//set the encoding type
	this.myelement.enctype = enctype;
}
form.prototype.setmethod = function (method) {
	this.myelement.method = method;
}
form.prototype.setonsubmit = function (onsubmit) {
	this.myelement.onsubmit = onsubmit;
}
form.prototype.setonreset = function (onreset) {
	this.myelement.onreset = onreset;
}
form.prototype.build = function (meta) {
	for (var i=0; i < meta.length; i++) {
		var anentry = meta[i];
		var aninput = document.createElement("input");
		aninput.type=anentry[0]
		aninput.name=anentry[1]
		aninput.value=anentry[2]
		this.myelement.appendChild(aninput)
	}
	console.debug(this.myelement.innerHTML)
}
form.prototype.submit= function () {
	console.debug("submit ..")
	this.myelement.submit()
}
form.prototype.htmlelement = function () {
	return this.myelement
}

//respondingform
respondingform = function (meta) {
	this.myelement = document.createElement("form");
	this.myelement.method="POST";
	this.myelement.action=document.URL;
}
respondingform.prototype.setmethod = function (method) { this.myelement.method = method; }
respondingform.prototype.setaction = function(url) { this.myelement.action = url; }
respondingform.prototype.build = function (meta) {
	for (var i=0; i < meta.length; i++) {
		var anentry = meta[i];
		var aninput = document.createElement("input");
		aninput.type="hidden"
		aninput.name=anentry[0]
		aninput.value=anentry[1]
		this.myelement.appendChild(aninput);
	}
	console.debug(this.myelement.innerHTML);
}
respondingform.prototype.htmlelement = function () {
	return this.myelement
}
