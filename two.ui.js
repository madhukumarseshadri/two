/*  
    two-ui.js - version 0.02
     Creator - Madhukumar Seshadri 
     Copyright(c) Sphere Inc  - August 11th 2012
     Purpose - begin talkweb browser systems
     depends (two.js, two-css.js)
*/

/* rect bounds of an html element */
bounds=function (e) { 
	/* return v.left,v.top,v.right,v.bottom,v.width */
	return e.getClientRects()[0]
}

setbounds=function(e,rect) { 
	two.css.position.setxy(e,rect.left,rect.top);
	two.css.size.set(e,rect.width,rect.height);
}

/* create a dynamic tag */
tag=function(type) { 
	return document.createElement(type)
}

/* create a dynamic tag */
inserttag=function(oftype,to_element) { 
	var e=document.createElement(oftype)
	if (to_element) to_element.appendChild(e);
	return e;
}

/* removetag */
removetag=function(id) { 
	var eid =document.getElementById(id);
	if (eid) eid.parentNode.removeChild(eid);
}

/* get a box insert of tag */
insertbox=function(towhat,type) {
	return box(insertag(towhat,type));
}

/* get a box insert of tag */
removebox=function(abox) {
	removtag(abox.e.id)
}

moveframe=function(newx,newy,aframe) { 
	two.css.position.set(aframe,"l",newx);
	two.css.position.set(aframe,"t",newy);
}

deleteframe=function(name) { 
	var givenframe=document.getElementById(name);
	givenframe.parentNode.removeChild(givenframe);
}

removeframe=function(e) { 
	e.parentNode.removeChild(e);
}

insertrightof=function(anelement,tagtype,displacexby,postype) { 
	var rect = bounds(anelement); 
	var e=inserttag(tagtype);
	if (!postype) postype="fixed";
	two.css.position.settype(e,postype);
	if (!displacexby) displacexby=5;
	two.css.position.setxy(e,rect.right+displacexby,rect.top);
	return e;
}

insertleftof=function(anelement,tagtype,displacexby,postype) { 
	var rect = bounds(anelement); 
	var e=inserttag(tagtype);
	if (!postype) postype="fixed";
	two.css.position.settype(e,postype);
	if (!displacexby) displacexby=5;
	two.css.position.setxy(e,rect.left-5,rect.top);
	return e;
}

inserttopof=function(anelement,tagtype,displaceyby,postype) { 
	var rect = bounds(anelement); 
	var e=inserttag(tagtype);
	if (!postype) postype="fixed";
	two.css.position.settype(e,postype);
	if (!displacexby) displacexby=5;
	two.css.position.setxy(e,rect.left,rect.top-displaceyby);
	return e;
}

insertbottomof=function(anelement,tagtype,displaceyby,postype) { 
	var rect = bounds(anelement); 
	var e=inserttag(tagtype);
	if (!postype) postype="fixed";
	two.css.position.settype(e,postype);
	if (!displacexby) displacexby=5;
	two.css.position.setxy(e,rect.left,rect.bottom+displaceyby);
	return e;
}

alignboxes=function(acontainer,towhat) {	/*hunt all the box */ return; } 

/* deprecated - use inserttag of insertbox */
/* insert a fixed frame - to body*/
insertframe=function(x,y,w,h,name,frametype) {
	var existing = null
	existing = document.getElementById(name)
	if (existing)
		existing.parentNode.removeChild(existing)
	if (!frametype)
		frametype="fixed"

	var aframe=document.createElement("div")

	two.css.position.settype(aframe,frametype)
	two.css.position.set(aframe,"l",x)
	two.css.position.set(aframe,"t",y)
	two.css.size.setwidth(aframe,w)
	two.css.size.setheight(aframe,h)
	 if (name)
		aframe.id=name

	two.page.body().appendChild(aframe)
 	return aframe;
}

/* insert a frame using xcode and ycode which can be 'lt' or 'lb' 
	or 'rt' or 'rb' */
insertframexy=function(xcode,ycode,x,y,w,h,name,frametype) {
	var existing = null
	existing = document.getElementById(name)
	if (existing)
		existing.parentNode.removeChild(existing)
	if (!frametype)
		frametype="fixed"

	var aframe=document.createElement("div")

	two.css.position.settype(aframe,frametype)
	two.css.position.set(aframe,xcode,x)
	two.css.position.set(aframe,ycode,y)
	two.css.size.setwidth(aframe,w)
	two.css.size.setheight(aframe,h)
	 if (name)
		aframe.id=name

	two.page.body().appendChild(aframe)
 	return aframe;
}

/* insert a frame - to body*/
insertframeat=function(x,y,name,frametype) {
	var existing = null;
	existing = document.getElementById(name);
	if (existing)
		existing.parentNode.removeChild(existing);
	if (!frametype)
		frametype="fixed";

	var aframe=document.createElement("div");

	two.css.position.settype(aframe,frametype);
	two.css.position.set(aframe,"l",x);
	two.css.position.set(aframe,"t",y);
	 if (name)
		aframe.id=name;

	two.page.body().appendChild(aframe);

 	return aframe;
}

/* control specific items */
/* generic */
triggerformsubmit=function(event,formid) { 
	//check if the id of element has type that is our type
	//check if the 
	controlsubmit(eid(formid),event.type);
}

triggerformpost=function(event,formid) { 
	//check if the id of element has type that is our type
	//check if the 
	controlpost(eid(formid),event.type);
}

controlpost=function(e,eventname,onresponse,onexception) {
	var scb = new two.com();
	scb.addheader("origin",e.id);
	scb.addheader("cause",eventname); 
	scb.post(document.URL,"",async_rh,async_eh);
}

controlsubmit=function(formid,eventname) {
	//if e.type is  not talkweb tab - forget it
	var e = eid(formid);
	//todo - object's type not the script interpreter anything is a object type but the derived type
	if (e.tagName == "FORM") { 
		if (!e.action) e.action=document.URL;
		for (var i in e) { if (e[i].name=="cause") { e[i].value = eventname; break; }; }
		e.method="POST"; 
		e.submit();
	}
}

