/*--
Author: 
Comments: 	
Todo:
--*/

function fill_profile_page(id){
	var name_element = document.getElementById("name");
	var score_cymbals_element = document.getElementById("score_cymbals");
	var score_drums_element = document.getElementById("score_drums");
	var score_total_element = document.getElementById("score_total");

	// get user scores and innet them to the html
	var user_storaged;
	var dir = "app.users.id" + id;

	user_storaged = JSON.parse( localStorage.getItem( dir ) );	//user keys are objects 
	
	name_element.innerHTML = user_storaged.name;
	score_cymbals_element.innerHTML += user_storaged.score_cymbals;
	score_drums_element.innerHTML += user_storaged.score_drums;
	score_total_element.innerHTML += user_storaged.score_total;
	
}