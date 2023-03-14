/* parse */
parse=function(s,i,wb) { 
	var out=""
	if (i < 0) return null;
	for (var x=i;x<s.length;x++) { 
		//if (s[x] == " " || s[x] == "\n" || s[x] == "\t" || s[x] == "<" || s[x] == ">" || s[x] =="\"")
		if (findinset(s[x],wb) != -1)
			return ([out,s[x],x+1]);
		else 
			out = out + s[x];
	}
	return ([out,'',-1]);
}

/* dsub */
dsub=function() {
	var output=""
	var wb=[" ","\n","\t","<",">","\"",","]
	var s=arguments[0]
	var w=b=""; var i=0;
	var pout=null;
	while (pout=parse(s,i,wb)) { 
		w = pout[0];  b=pout[1]; i=pout[2];
		if (w[0]=="$") { 
			var m = findinset(w.substring(1,w.length).trim(),arguments,1);
			if (m != -1) { 
				w=arguments[m+1]
			}
		}
		if (b == "\t" || b == "\n")
			output=output +  w + " "; 
		else
			output=output + w + b; 
	}
	return output;
}

/* linear array line break in ASCII \n */
function  csva(s) { 
	var out=[]
	var t=-1; var i=0;
	var dqon=sqon=	0
	var comma=","; var cr="\n"; var dq="\""; var sq="'";
	var wb=[comma,cr,dq,sq];
	var o;
	while (o=parse(s,i,wb)) { 
		//console.debug(o)
		var w=o[0]; var b=o[1]; i=o[2]
		if (b == dq || b == sq) {
			nextone=findinset(b,s,i+1)
			//console.debug("result is",nextone)
			if (nextone == -1) { 
				out[++t] = w + s.substring(i,s.length)
				break;
			}
			else {
				out[++t] = w + s.substring(i++,nextone)
				i=nextone+1
			} 
		}
		else if (b == comma || !b) { 
			if (w) out[++t] = w;
		}
		else if (b == cr) { 
			t++
			out[t]=cr
		}
	}
	return out
}

/* linear array line break in ASCII - bugs\n */
function  csvaofa(s) { 
	var out=[];
	var ii=-1; var oi=0; var i=0;
	var dqon=sqon=0
	var comma=","; var cr="\n"; var dq="\""; var sq="'";
	var wb=[comma,cr,dq,sq];
	var o;
	out[oi]=[]
	while (o=parse(s,i,wb)) { 
		//console.debug(o)
		var w=o[0]; var b=o[1]; i=o[2]
		if (b == dq || b == sq) {
			nextone=findinset(b,s,i+1)
			//console.debug("result is",nextone)
			if (nextone == -1) { 
				out[oi][++ii] = w + s.substring(i,s.length)
				break;
			}
			else {
				out[oi][++ii] = w + s.substring(i++,nextone)
				i=nextone+1
			} 
		}
		else if (b == comma || !b) { 
			if (w) out[oi][++ii] = w;
		}
		else if (b == cr) { 
			if (w) out[oi][++ii]=w
			if (out[oi].length > 0)
				out[++oi]=[]
			ii=-1
		}
	}
	if (out[oi].length < 1)
		out.pop()
		
	return out
}

////Not made the grade ..
escq=function(q,s) {
	var wb=q
	var ns = ""
	var i=0
	var o = parse(s,i,wb);
	while (o) {
		var w=o[0]; var b=o[1]; var i=o[2];
		ns += w; w = ""
		if (b == q)
			ns = ns + '\\' + q
			o = parse(s,i,b)
	}
	ns += w
	return ns
}

unescq=function(q,s) {
	var wb=q
	var ns = ""
	var i=0
	var o = parse(s,i,wb);
	while (o) {
		var w=o[0]; var b=o[1]; var i=o[2];
		console.debug(w,b,i)
		var	p=s.substring(i-1,1)
		if (b == q && p == "\\"){
			ns = ns.substring(0,ns.length-1) + q
		}
		else
			ns += w;

		o = parse(s,i,b)
	}
	return ns
}

String.prototype.subs = function () { 
	/* dsub code - repeated to avoid array copy */
	var output=""
	var wb=[" ","\n","\t","<",">","\"",","]
	var s=this.slice();
	var w=b=""; var i=0;
	var pout=null;
	while (pout=parse(s,i,wb)) { 
		w = pout[0];  b=pout[1]; i=pout[2];
		if (w[0]=="$") { 
			var m = findinset(w.substring(1,w.length).trim(),arguments,0);
			if (m != -1) { 
				w=arguments[m+1]
			}
		}
		output=output + w + b; 
	}
	return output;
}