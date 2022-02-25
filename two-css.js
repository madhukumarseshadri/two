/* css.js
## written by Madhukumar Seshadri
## Copyright(c) Madhukumar Seshadri - August 11th 2012
## purpose - do simple things  
## version - yet to be defined
*/

/* create two if two does not exists  */
try { eval("two") } catch (e) { two=Object(); } 

/* depends */
// include host.js before everything talkweb tw object needs to come into play

two.rgbc = function (r,g,b) { 
	return "rgb(" + r.toString() + "," + g.toString() + "," +  b.toString() + ")";
}

//name of property
two.np = Object()
two.np.nameofproperty = function nameofproperty(inbrowser,propertyname) {
	if (tw._host.isie())  
		_ie_nameofproperty(propertyname);
	if (tw._host.issafari())  
		_saf_nameofproperty(propertyname);
	if (tw._host.isopera())  
		_op_nameofproperty(propertyname);
	else 
		return propertyname; 
}

//css for place,position,content,text,background and cursor
two.css=Object()
two.css._set=function (e,pn,pv) { 
	//browser=host.browser();
	//pn = eval("+" + browser + "_nameofproperty" + (universalpropertyname) + "()");
	//printf("setting %s with value %s for %s",pn,pv,e)
	//toeval="e.style." + pn + "=" + '"' + pv + '"';
	//eval(toeval);
	e.style[pn]=pv;
}
two.css._get=function (e,pn) { 
	//browser=host.browser();
	//pn = eval("+" + browser + "_nameofproperty" + (universalpropertyname) + "()");
	//printf("setting %s with value %s for %s",pn,pv,e)
	//toeval="e.style." + pn
	//return eval(toeval);
	return e.style[pn]
}

//css namspace - place
two.css.place = Object()
two.css.place.setdisplay = function (e,value) { two.css._set(e,"display",value); }
two.css.place.setvisibility = function (e,value) { two.css._set(e,"visibility",value); }
two.css.place.setborder = function (e,forsides,style,width,color) { 
	e = arguments[0];
	if (!e) return;
	if (arguments.length < 2)
		return
	style=arguments[2]
	width=arguments[3]
	color=arguments[4]
	pv = ''
	if (style) pv = pv + style
	if (width) pv = pv + " " + width 
	if (color) pv = pv + " " + color
	if (pv != "")  { 
		if (forsides=="a")
			two.css._set(e,"border",pv); 
		if (forsides.match("l") != null)
			two.css._set(e,"borderLeft",pv);
		if (forsides.match("r") != null)
			two.css._set(e,"borderRight", pv); 
		if (forsides.match("t") != null)
			two.css._set(e,"borderTop",pv); 
		if (forsides.match("b") !=null)
			two.css._set(e,"borderBottom",pv); 
	}
}
two.css.place.setborderradius = function (e,value) { 
	two.css._set(e,"borderRadius",value); 
}
//end of place

//size
two.css.size = Object()
two.css.size.setheight = function (e,value) { 
	two.css._set(e,"height",value);
}
two.css.size.setwidth = function (e,value) { 
	two.css._set(e,"width",value);
}
two.css.size.set = function (e,w,h) { 
	two.css._set(e,"height",h);
	two.css._set(e,"width",w);
}
//end of place

/* manage tw position 
## type = "(static|relative|absolute|fixed)"
## left="(auto|10[%]|LENGTH[px][em])"
## right=left
## top=left
## bottom=left
## zindex='0'
## float="(nonelleft|right)"
## clear="(none|left|right|both)" */

two.css.position = Object();
two.css.position.settype =function(e,value) { two.css._set(e,"position",value); } 
two.css.position.setz = function (e,value) { two.css._set(e,"zindex",value); } 
two.css.position.float = function (e,value) { two.css._set(e,"float",value); }
two.css.position.clear = function (e,value) { two.css._set(e,"clear",value); }
two.css.position.set = function (e,forsides,value) { 
		//one value or number of values for each letter in forsides
		if (forsides == 'a') {
			two.css._set(e,"left",value)
			two.css._set(e,"right",value)
			two.css._set(e,"bottom",value)
			two.css._set(e,"top",value)
		}
		if (forsides.match("l") != null)
			two.css._set(e,"left",value)
		if (forsides.match("r") != null)
			two.css._set(e,"right",value)
		if (forsides.match("t") != null)
			two.css._set(e,"top",value)
		if (forsides.match("b") !=null)
			two.css._set(e,"bottom",value)
}
two.css.position.setxy = function (e,x,y) { 
		//one value or number of values for each letter in forsides
		two.css._set(e,"left",x)
		two.css._set(e,"top",y)
		two.css.position.unset(e,"r")
		two.css.position.unset(e,"b")
}
/* This is needed incase if you are trying set left after setting right, 
right value will still be there creating results you don't like */
two.css.position.unset = function (e,forsides) { 
		var value="auto"
		if (forsides == 'a') {
			two.css._set(e,"left",value)
			two.css._set(e,"right",value)
			two.css._set(e,"bottom",value)
			two.css._set(e,"top",value)
		}
		if (forsides.match("l") != null)
			two.css._set(e,"left",value)
		if (forsides.match("r") != null)
			two.css._set(e,"right",value)
		if (forsides.match("t") != null)
			two.css._set(e,"top",value)
		if (forsides.match("b") !=null)
			two.css._set(e,"bottom",value)
}
// end of position 

//content 
/*	## pad="pad([a|lrtb,length)"
	## alignto="alignto(dir)"
	## margin="margin([a|lrtb],valuein[number x or p%])"
	## overflow="overflow(visible|hidden|auto|scroll)" 
*/
two.css.content = Object()
two.css.content.pad = function (e,forsides,value) {
	if (forsides == 'a')
		two.css._set(e,"padding",value)  
	if (forsides.match("l") != null)
		two.css._set(e,"paddingLeft",value);
	if (forsides.match("r") != null)
		two.css._set(e,"paddingRight", value); 
	if (forsides.match("t") != null)
		two.css._set(e,"paddingTop",value); 
	if (forsides.match("b") !=null)
		two.css._set(e,"paddingBottom",value); 
	} ; 
two.css.content.alignto = function (e,dir) { two.css._set(e,"textAlign",dir); }
two.css.content.margin = function (e,forsides,value) { 
	if (forsides == 'a')  
		two.css._set(e,"margin",value);
	if (forsides.match("l") != null)
		two.css._set(e,"marginLeft",value); 
	if (forsides.match("r") != null)
		two.css._set(e,"marginRight",value); 
	if (forsides.match("t") != null)
		two.css._set(e,"marginTop",value); 
	if (forsides.match("b") !=null)
		two.css._set(e,"marginBottom",value); 
	}
two.css.content.overflow = function  (e,value) { two.css._set(e,"overflow",value); }  
//end of content


//text
two.css.text=Object()
two.css.text.setfont = function (e,v) {
	two.css._set(e,"fontFamily",v) 
}
two.css.text.setfontsize = function (e,v) {
	two.css._set(e,"fontSize",v) 
}
two.css.text.setfontstyle = function (e,v) {
	two.css._set(e,"fontStyle",v) 
}
two.css.text.setfontweight = function (e,v) {
	two.css._set(e,"fontWeight",v) 
}
two.css.text.setfontvariant = function (e,v) {
	two.css._set(e,"fontVariant",v) 
}
two.css.text.setcolor = function () { 
	n = two.css.text.setcolor.arguments.length
	if (n < 2) return 
	if (n==2) {
		args = two.css.text.setcolor.arguments
		two.css._set(args[0],"color",args[1])					
	}
	if (n==4) {
		args = two.css.text.setcolor.arguments
		two.css._set(args[0],"color",two.rgbc(args[1],args[2],args[3]))
	}
}
two.css.text.setdecoration = function (e,value) { 
	//line-through,under-line and over-line
	two.css._set(e,"textDecoration",value);
}
two.css.text.settransform = function (e,value) { 
	//lower-case,upper-case,capitalize
	two.css._set(e,"textTransform",value);
}
two.css.text.setdirection = function (e,value) { 
	//ltr,rtl
	two.css._set(e,"textDirection",value);
}
two.css.text.setlineheight = function (e,value) { 
	//normal, LENGTH, %FontSize, Multiplier
	two.css._set(e,"lineheight",value); 
}
two.css.text.setwordspacing = function (e,value) { 
	two.css._set(e,"wordSpacing",value); 
}
two.css.text.setwhitespace = function (e,value) { 
	two.css._set(e,"whiteSpace",value); 
}
two.css.text.setunicodebidi = function (e,value) { 
	two.css._set(e,"unicodebidi",value);
}
two.css.text.align = function (e,value) { 
	two.css._set(e,"textAlign",value); 
}
two.css.text.setShadow = function (e,value) { 
	two.css._set(e,"textShadow",value); 
}
two.css.text.align = function (e,value) { 
	two.css._set(e,"textAlign",value); 
}
two.css.text.valign = function (e,value) { 
	two.css._set(e,"verticalAlign",value); 
}
two.css.text.setwordwrap = function (e,value) { 
	two.css._set(e,"wordWrap",value); 
}
//end of text

//background
two.css.bg = Object();
two.css.bg.color = function (e,color) { two.css._get(e,"backgroundColor"); }
two.css.bg.setcolor = function (e,color) { two.css._set(e,"backgroundColor",color); }
two.css.bg.image = function (e,url) { two.css._set(e,"backgroundImage"); } 
two.css.bg.setimage = function (e,url) { two.css._set(e,"backgroundImage",url); } 
two.css.bg.position = function (e,value) { two.css._set(e,"backgroundPosition");}
two.css.bg.setposition = function (e,value) { two.css._set(e,"backgroundPosition",value);}
two.css.bg.size = function (e,value) { two.css._set(e,"backgroundSize"); } 
two.css.bg.setsize = function (e,value) { two.css._set(e,"backgroundSize",value); } 
two.css.bg.clip = function (e,value) { two.css._set(e,"backgroundClip");} 
two.css.bg.setclip = function (e,value) { two.css._set(e,"backgroundClip",value);} 
two.css.bg.origin = function (e,value) { two.css._set(e,"backgroundOrigin");} 
two.css.bg.setorigin = function (e,value) { two.css._set(e,"backgroundOrigin",value);} 
two.css.bg.attachment = function (e,value)  { two.css._set(e,"backgroundAttachment");} 
two.css.bg.setattachment = function (e,value)  { two.css._set(e,"backgroundAttachment",value);} 
two.css.bg.repeat=function setrepeat(e,value) { two.css._set(e,"backgroundRepeat");}
two.css.bg.setrepeat=function setrepeat(e,value) { two.css._set(e,"backgroundRepeat",value);}
//end of background

//cursor object
two.css.cursor = Object()
two.css.cursor.setcursor = function (e,value) {
	two.css._set(e,"cursor",value); 
}
// end of cursor object
