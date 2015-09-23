/*--
Author: 
Comments: 	
Todo:	- integrate users info with firebase to see a huge social stats not only the local one
--*/

function user_initializeusers(){
	// initialize user management
		//for now, is useless
		for (var i=0,number = 0; i < localStorage.length ; i++)
			if ( (/^app\.users.id/).test(localStorage.key(i)) ) number++; 
		
		//for now, is useless
		localStorage.setItem('app.users.length', number);
	
		//to know what's the next id to assign
		if (!localStorage.getItem('app.users.nextid') ) localStorage.setItem('app.users.nextid', 1);
}

function user_validate(user,pass){
	var user_storaged;
	
	for (var i=0; i < localStorage.length ; i++){ 				// check in localstorage for the user keys
		if ( (/^app\.users.id/).test(localStorage.key(i)) ) {	// only the user keys
			user_storaged = JSON.parse( localStorage.getItem(localStorage.key(i)) );	//user keys are objects 
			if ( user == user_storaged.name ){
				//check password
				if ( pass == user_storaged.pass ) {
					//to remember_me feature
					var remember_box = document.getElementById('remember_me');
					if ( remember_box.checked )	localStorage.setItem('app.remember_me', 1);
						else localStorage.setItem('app.remember_me', 0);

					return 1; //user and pass validated
				} else return 0; // failure with the password
			}
		} 
	}
	return 0; // failure with the user name, or any user exists
}

function user_create_new(){ //todo: not allow same name as other user
	var nextid = localStorage.getItem('app.users.nextid');
	
	//Object that contains all the user information
	var user = new Object();
	user.name = document.getElementById('name').value;
	user.pass = document.getElementById('pass').value;
	user.phone = document.getElementById('phone').value;
	user.email = document.getElementById('email').value;
	user.birthday = document.getElementById('birthday').value;
	user.id = nextid;

	// ckeck if there an error with the user name
	var user_storaged;
	for (var i=0; i < localStorage.length ; i++) 				// check in localstorage for the user keys
		if ( (/^app\.users.id/).test(localStorage.key(i)) ) {	// only the user keys
			user_storaged = JSON.parse( localStorage.getItem(localStorage.key(i)) );	//user keys are objects 
			if ( user.name == user_storaged.name )	return 0; // error with the username, choose another one
		} 
	
	//save it as a new user
	var dir = "app.users.id" + nextid;
	localStorage[ dir ] = JSON.stringify(user);
	
	//for the next user_create_new call
	nextid++;
	localStorage.setItem('app.users.nextid', nextid);
	
	//save the info about how many user we have storaged
	var userslength = localStorage.getItem('app.users.length');
	userslength++;
	localStorage.setItem('app.users.length', userslength);
	
	return 1;
}