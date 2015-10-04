/*--
Author: 
Comments: 	
Todo:	
--*/

function remember_me(){
	window.addEventListener("load", function(){
		if ( localStorage.getItem('app.remember_me') == 1 ) window.location.href='start.html';
	});
}

function check_user_logged (){
	if ( localStorage.getItem('app.currentuserid') ) return 1;
		else return 0;
}

function log_out (){
	localStorage.removeItem('app.currentuserid');
	localStorage.removeItem('app.remember_me');
	window.location.href='index.html';
}

function my_profile_page (){
	var dir = "profile.html?id=" + localStorage.getItem('app.currentuserid');
	
	window.location.href= dir;
}

/*	Function to get values in JS made by http://papermashup.com/read-url-get-variables-withjavascript/ 
	I.e: if we have this url http://papermashup.com/index.php?id=123&page=home
			to get the parameters we only to: 	var first = getUrlVars()["id"];
												var second = getUrlVars()["page"];
*/
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}