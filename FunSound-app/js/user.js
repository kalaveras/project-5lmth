/*--
Author: 
Comments: 	
Todo:	
--*/

function user_validate(user,pass){
	if (document.getElementById('remember_me').checked )
		localStorage.setItem('app.remember_me', 1);
	else localStorage.setItem('app.remember_me', 0);
	
	return 1;
	
}
