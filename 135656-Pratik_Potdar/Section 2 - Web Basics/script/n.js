function Preview(frm){

if(frm.checkValidity()){

	var win=window.open("","Submit","width=300,height=500");
	win.document.write("<html><head><title>Submit Data</title></head><body>");
	win.document.write("<h1>Submit Data</h1>");
	win.document.write("<p> Postal Location is :"
	+ frm[2].options[frm[2].selectedIndex].text +"</p>");
	win.document.write("<p>Postal location is :"+ frm[2].value+"</p>");
		win.document.write("</body></html>");
	}
	}