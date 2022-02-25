/* 
two-com.js
## written by Madhukumar Seshadri
## Copyright(c) Madhukumar Seshadri - August 11th 2012
## purpose - in this endless world of wrappers there is some helpful ones, 
## even though you imagine why do you need this .. answer is simple .. time 
## - get, put, post using XMLHttpRequest 
## we are just wrapper because I hate using typing XMLHttpRequest for simple request object
## version - yet to be defined
## - last updated - Feb 24th 2.02 AM
*/

// [ depends on two from file two.js"]
two.response = function (request) { 
	this.request=request.url
	this.status=request.status
	this.response=request.response
	this.text=request.responseText
	this.type=request.responseType
	this.xml=request.responseXML
	this.headers=request.getAllResponseHeaders()
	this.headerset={};
	var c=""; var w=""; var con=0;
	for (var i in this.headers) { 
		c=this.headers[i]
		if (c==":")  {
			if (con) { w = w + c;  continue; }
			con=1; 
			pw=w;
			w="";
		}
		else if (c=="\n") {
			con=0;
			this.headerset[pw]=w.trim();
			w="";
		}
		else { 
			w = w + c;
		}
	}	
	return this;
}

two.com=function () { 
	//init code
	if (window.XMLHttpRequest)
	     this.request= new XMLHttpRequest();
	 else
	     this.request= ActiveXObject("Microsoft.XMLHTTP");
	//request headers		
	this.rh=[]
}

two.com.prototype.addheader = function(header,value) { 
		if (header && value)
			this.rh[this.rh.length]=[header,value]
}

two.com.prototype._setheader= function () {
		for (var i in this.rh) {
			//console.debug("setting request header..",this.rh[i][0],this.rh[i][1])
			this.request.setRequestHeader(this.rh[i][0],this.rh[i][1].toString());
		}
}

two.com.prototype.displayheaders = function () { 
		for (var i in this.rh) {
			console.debug(this.rh[i][0] +":" + this.rh[i][1].toString());
		}
}

two.com.prototype.post=function (url,qs,callback,onexcept) {
        //console.debug("post",url,qs)
		this.request.url=url
		this.request.callback=callback
		this.request.open("POST",url,true)
		//this.addheader("Content-Length",qs.length)
		//this.displayheaders()
		this._setheader()
		this.request.onreadystatechange=function () { 
			//console.debug("two.com.post:callingback",this.readyState,this.status)
			if (this.readyState==4 && this.status==200) { 
				if (this.callback)
					this.callback(new two.response(this))
			}
		}
		try { 
			this.request.send(qs)
		} 
		catch (e) { 
			if (onexcept) { 
				onexcept(this.request,e)
			}
		}
} //end of this.post

two.com.prototype.get=function (url,qs,callback,onexcept) {
        //console.debug("get",url,qs)
		this.request.url=url
		this.request.callback=callback
		this.request.open("GET",url,true)
		//this.addheader("Content-Length",qs.length)
		//this.displayheaders()
		this._setheader()
		this.request.onreadystatechange=function () { 
			//console.debug("two.com.get:callingback" + this.callback)
			if (this.readyState==4 && this.status==200) { 
				if (this.callback)
					this.callback(new two.response(this))
			}
		}
		try { 
			this.request.send(qs)
		} 
		catch (e) { 
			if (onexcept) { 
				onexcept(this.request,e)
			}
		}
	} //end of this.get

two.com.prototype.put=function (url,qs,callback,onexcept) { 
		this.request.url=url
		this.request.callback=callback
		this.request.open("PUT",url,true)
		//this.addheader("Content-Length",qs.length)
		//this.displayheaders()
		this._setheader()
		this.request.onreadystatechange=function () { 
			//console.debug("two.com.put:callingback" + this.callback)
			if (this.readyState==4 && this.status==200) { 
				if (this.callback)
					this.callback(new two.response(this))
			}
		}
		try { 
			this.request.send(qs)
		} 
		catch (e) { 
			if (onexcept) { 
				onexcept(this.request,e)
			}
		}
	} 

function http_get(url) { 
	document.http_lastresponse=""
	var x = new two.com()
	x.get(url,
		function() { document.http_lastresponse = arguments[0];},
		function () { console.debug(arguments[1]); } 	);  
}

kvp=function() {}
kvp.prototype.add=function () { this[arguments[0]]=arguments[1]; }
kvp.prototype.qs=function () { 
	//urlencoding is an issue .. 
	var qs=""
	for (var x in this) {
		if (typeof this[x] != typeof(function(){})) {
			//console.debug(x + "=" + this[x].toString());
			qs = qs + x + "=" +  this[x].toString() + "&"
		}
	}
	qs = qs.substring(0,qs.length-1);
	return qs;
}
kvp.toqs=function(alist) { 
	qs=""
	for (one in alist) { 
		qs = qs + alist[one][0].toString() + "=" + alist[one][1].toString() + "&"
	}
	qs = qs.substring(0,qs.length-1);
	return qs;
}
