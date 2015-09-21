/*--
Author: 
Comments: 	
Todo:	
--*/

function user_validate(user,pass){
	//handle with remmeber me app feature
	var remember_box = document.getElementById('remember_me');
	
	if ( remember_box.checked )
		localStorage.setItem('app.remember_me', 1);
	else localStorage.setItem('app.remember_me', 0);
	
	//
	
	return 1;
	
}
