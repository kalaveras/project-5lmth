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
