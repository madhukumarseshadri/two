/*
     two.js - version 0.02
     Creator - Madhukumar Seshadri
     License - See license file
     Purpose - begin talkweb browser systems
*/

/* globals */
/* $=function(anid,rootcell) { if (!rootcell) { return document.getElementById(anid); } for (i=0;i<rootcell.children.length;i++) { if (rootcell.children[i].id == anid) { return rootcell.children[i]; } } } */
makeiterable=function (o) {
	o.___index=-1;
	o.next=function() { this.___index++; if (this.___index < this.length) return this[this.___index]; else this.___index=-1; }
	o.reset=function() { this.___index=-1 }
}
eid=function(s) { return document.getElementById(s); }
ein=function(s) { return document.getElementsByName(s); }
str=function(o) { var s=""; for (var a in o) s = s + a +":" + o[a].toString() +";"; console.debug(s); }
len=function(o) { return o.length; }
printk=function() { var s=""; for (var i in arguments) s += arguments[i] + " "; s.substring(0,s.length-1); console.debug(s); }
eic = function(id,rootcell) {
   for(var i=0; i<rootcell.children.length; i++) {
		if (rootcell.children[i].id == id) return rootcell.children[i];
   }
}
isdigit = function (x) { if (x in ['0','1','2','3','4','5','6','7','8','9']) return true; return false; }

findinset=function (avalue,aset,fromwhere) {
	if (arguments.length > 2) fromwhere=arguments[2];
	else fromwhere=0
	for (i=fromwhere;i<aset.length;i++) {
		if (aset[i] == avalue)  return i;
	}
	return -1;
}
/* it has to be iterable this[i] should produce something .. */

/* start talkweb object namespaces declare namespace root subtrees here */
two=Object();
two.ui=Object();	//ui
two.np=Object(); 	//name property
two.ui=Object();		//ui
two.host=Object();     //host

/* the page */
two.page = Object()
two.page.html = function () { return document.getElementsByTagName("html").item(0); }
two.page.head = function () { return document.getElementsByTagName("head").item(0); }
two.page.body = function () { return document.getElementsByTagName("body").item(0); }
//document.html = function () { return document.getElementsByTagName("html").item(0); }
//document.head = function () { return document.getElementsByTagName("head").item(0); }
//document.body = function () { return document.getElementsByTagName("body").item(0); }


/* the host */
two.host.browser=function () {
	var n=window.navigator.appCodeName;
	//the only place we come to our browser codes
	if (n == "webkit") { 	return "sa"; }
	//default to firefox
	return "ff";
}
two.host.version=function() { return window.navigator.appVersion; }
two.host.isfirefox=function() { if (self.browser() == "ff")  return true; else return false; }
two.host.isie=function() { if (self.browser() == "ie") return true; else return false; }
two.host.issafari=function() { if (self.browser() == "sa") return true; else return false; }
two.host.isopera=function() { if (self.browser() == "op") return true; else return false; }
two.host.ischrome=function() { if (self.browser() == "ch") return true; else return false; }
two.host.iscookieon=function () { return window.navigator.cookieEnabled; }
two.host.isscripton=function () { return window.navigator.cookieEnabled; }
two.host.doessupportsinlinestyles=function () { return "tbd"; }

/* what's supported */
two.supportedbrowsers=function () {
	var x = Array();
	x[0] = "ff";	// netscape - firefox
	x[1] = "ie";	// ie
	x[2] = "sa";	// safari
	x[3] = "op";	// opera
	x[4] = "ch";	// chrome
	return x;
}

rbox=function() { if (arguments.length > 0) return new two.ui.box(arguments[0]); else return new two.ui.box(); }
box=function() { if (arguments.length > 0) return new two.ui.box(arguments[0],0); else return new two.ui.box(); }
rboxfromid=function() { if (arguments.length > 0) return new two.ui.box(eid(arguments[0])); else return new two.ui.box(); }
boxfromid=function() { if (arguments.length > 0) return new two.ui.box(eid(arguments[0]),0); else return new two.ui.box(); }
function qs() {
		var o = {}
		var q = (location.search.substr(1)).split("&");
		for (var i=0; i< q.length; i++) {
				var t = q[i].split("=");
				if (t.length>0){
						o[t[0]]=unescape(t[1]);
				}
		}
		return o;
}
