row=function(rowid) { 
	this.element=tag("div")
} 
row.prototype.setcoordinates=function (x,y) { 
	if (x)
		two.css.position.set(this.element,"l",x)
	if (y)
		two.css.position.set(this.element,"t",y)
}
row.prototype.setsize=function (w,h) { 
	if (w)
		two.css.size.setwidth(this.element,"l",w)
	if (h)
		two.css.size.setheight(this.element,"t",h)
}
row.prototype.addcolumnwithdata=function (data) { 
	var x = tag("div")
	x.innerHTML=data
	this.element.appendChild(x)
}
row.prototype.addcolumn=function(element) { 
	this.adjust
}
row.prototype.setborder=function(aborder) { 

}
row.prototype.setmargin=function(margin) { 
} 
row.prototype.setpadding=function(padding) { 
} 
row.prototype.setfont=function(afont) { 
} 
row.prototype.setbackground=function(abackground) { 
}
row.prototype.addto(element) { 
	element.appendChild(this.element)
}

