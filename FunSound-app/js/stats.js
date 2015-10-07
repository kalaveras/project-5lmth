/*--
Author: 
Comments: 	
Todo:
--*/


function fill_total_stats(){ 
	// put the title
	var title = document.getElementById('stats_title');
	title.innerHTML = "HIGH SCORE. TOTAL";
	
	// get the own user info
	var current_user;
	var dir = "app.users.id" + localStorage.getItem('app.currentuserid');
	current_user = JSON.parse( localStorage.getItem( dir ) );	//user keys are objects 
	
	//fill with the own score
	var own_score = document.getElementById('box_own_score');
	own_score.innerHTML = "<span>" +  current_user.name + " :  " + current_user.score_total + "</span>";

	// fill the rest
	
	
}

function order_users() {
	var users = [];
	var users_by_total = [];
	var users_by_drums = [];
	var users_by_cymbals = [];
	
	// collect all user in an array
	var user_storaged;
	for (var i=0; i < localStorage.length ; i++) 				// check in localstorage for the user keys
		if ( (/^app\.users.id/).test(localStorage.key(i)) ) {	// only the user keys
			user_storaged = JSON.parse( localStorage.getItem(localStorage.key(i)) );	//user keys are objects 
			user_storaged.pass = ""; // we dont want to send this information in the function returns
			users.push(user_storaged);
		} 
	
	// order by total score using Bubble Sort algorithm. not the best one, but the easiest to be implemented from scratch
	var  aux, i, j;

	for (i = 0; i < users.length -1 ; i++) 
		for (j = i + 1; j < users.length ; j++) 
			if (users[i].score_total < users[j].score_total ) {
				 aux = users[i];
				 users[i] = users[j];
				 users[j] = aux;
			}
			
	users_by_total = users.slice();
	// order by drums score
	for (i = 0; i < users.length -1 ; i++) 
		for (j = i + 1; j < users.length ; j++) 
			if (users[i].score_drums < users[j].score_drums ) {
				 aux = users[i];
				 users[i] = users[j];
				 users[j] = aux;
			}
	users_by_drums = users.slice();
	// order by cymbals score
	for (i = 0; i < users.length -1 ; i++) 
		for (j = i + 1; j < users.length ; j++) 
			if (users[i].score_cymbals < users[j].score_cymbals ) {
				 aux = users[i];
				 users[i] = users[j];
				 users[j] = aux;
			}
	users_by_cymbals = users.slice();

	return [users_by_total, users_by_drums, users_by_cymbals];
}
	
