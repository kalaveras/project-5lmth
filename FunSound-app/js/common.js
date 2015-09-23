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
	window.location.href='index.html';
}