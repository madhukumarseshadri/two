/*
Author - Madhukumar Seshadri
*/

table = function() {
	this.datacontainer = document.createElement("tbody")
	//tableElement.appendChild(this.datacontainer)
	//this.datacontainer.id = id;
	this.rowcount = 0;
	this.colcount = 0;
}

table.prototype.tbody = function () {
	return this.datacontainer
}

table.prototype.addat=function(x,y,innerhtml) {
	var i=0; var j=0;
	if (x < this.rowcount) {
		if (y < this.colcount) {
			this.datacontainer.children[x].children[y].innerHTML=innerhtml;
		}
		else {
			for (var i = this.colcount; i < y+1; i++) {
			  this.datacontainer.children[x].appendChild(document.createElement("td"));
				if (y == i) {  this.datacontainer.children[x].children[y].innerHTML=innerhtml; }
			}
			this.colcount = y + 1;
			}
		}
    else {
			 //x is above count
			 existingrowcount=this.rowcount;
			 if (y < this.colcount) {
					colbounds=this.colcount;
  			} else {
					colbounds = y + 1;
					expandexistingrows=1;
			  }
				//newrows
			  for (var i = this.rowcount; i < x+1; i++) {
					this.datacontainer.appendChild(document.createElement("tr"));
					for (var j = 0; j < colbounds; j++) {
						this.datacontainer.children[i].appendChild(document.createElement("td"));
					}
				}
				this.rowcount = x+1;
				if (expandexistingrows) {
					for (var i = 0; i < existingrowcount; i++) {
						for (var j = this.colcount; j < y+1; j++) {
							this.datacontainer.children[i].appendChild(document.createElement("td"));
						}
					}
				}
				this.colcount=y+1
		} //else
		this.datacontainer.children[x].children[y].innerHTML=innerhtml;
		return this.datacontainer.children[x].children[y]
}

table.prototype.at=function(x,y) {
	if (x < this.rowcount && y < this.colcount)
			return this.datacontainer.children[x].children[y];
}

table.prototype.removecellat=function(x,y) {
	if (x < this.rowcount && y < this.colcount) {
		console.debug("removecellat",this.datacontainer.children[x])
		this.datacontainer.children[x].removeChild(this.datacontainer.children[x].children[y]);
		console.debug("removecellat",this.datacontainer.children[x].length)
		if (this.datacontainer.children[x].length < 1) {
			this.datacontainer.removeChild(this.datacontainer.children[x]);
		}
	}
}

table.prototype.setlayout=function(x,y,incomingcell) {

}

table.prototype.setcolumnsize=function (data,rootcell) {
	//ok let us do array of boxes for first
	this.pcell=rootcell.children[0];
	this.hcell=rootcell.children[1];
	this.dcell=rootcell.children[2];
}

table.prototype.fill=function() {}

table.prototype.changecolumnsize = function (n,tosize) {
	var cols = this.columns(n);
	for (var i=0;i<cols.length;i++) {
	     //two.css.size.setwidth(cols[i],tosize)
	}
}

table.prototype.foreveryrow=function(dothis) {
   for (var i=0; i<this.datacontainer.children.length; i++) {
   	dothis(this.datacontainer.children[i])
   }
}

table.prototype.foreverycell=function(dothis) {
   for (var i=0; i<this.datacontainer.children.length; i++) {
		for (var j=0;j<this.datacontainer.children[i].children.length; j++) {
			dothis(this.datacontainer.children[i].children[j])
		}
   }
}

table.prototype.rowindexforrow = function (ro) {
   for (var i=0; i<this.datacontainer.children.length; i++) {
   		if (this.datacontainer.children[i] == ro) {
   			return i
   		}
   }
}

table.prototype.rowindexforcell= function(td) {
   for (var i=0; i<this.datacontainer.children.length; i++) {
		for (var j=0;j<this.datacontainer.children[i].children.length; j++) {
				if (this.datacontainer.children[i].children[j] == td) {
					return i
				}
		}
   }
}
