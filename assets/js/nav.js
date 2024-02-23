function loadNavbar() {
    elmnt = document.getElementById("nav-placeholder")
    xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4) {
		    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	    	if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
    	}	
	}
	console.log(xhttp.open("GET", WEB_HOME+"assets/nav/nav.html", true));
    xhttp.send();
	var listOfLinks = document.getElementsByTagName("a");
	i=0;
	while (i < listOfLinks.length){
		var a = listOfLinks[i];
		try {
			a.href = WEB_HOME + a.href;
		} catch (error) {
			continue
		}
		i++;
	}
	elmnt = document.getElementById("image-placeholder")
    xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4) {
		    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	    	if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
    	}	
	}
	console.log(xhttp.open("GET", WEB_HOME+"assets/nav/image.html", true));
    xhttp.send();
}