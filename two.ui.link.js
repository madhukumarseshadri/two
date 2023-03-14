// [ depends on two from file two.js ]
// [ depends on two.css from file two-css.js ] 

button=Object()
button.__proto__=two.ui.box
/* button */
button.create=function(text,buttonstyle) { 
	x=Object()
	x.__proto__=this
	x.e=document.createElement("button")
	x.e.innerText=text
	x.style(buttonstyle)
	return x

}
button.style=function(tostyle) {
	//todo  - use some css and get some predef style
	//onmouseover perhaps
	//edges perhaps	
}

/* link */
link=Object()
link.__proto__=two.ui.box
link.create=function(text,href,style) {
	x=Object()
	x.__proto__=this 
	x.e=document.createElement("a")
	x.e.href=href
	x.e.innerText=text
	this.style(style)
	return x
}
link.style=function(tostyle) { 
	//todo 
}
