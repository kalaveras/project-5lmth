/*--
Author: 
Comments: 	
Todo:
--*/

function playPause(element){
	//get the user scores
	var user_storaged;
	var dir = "app.users.id" + localStorage.getItem('app.currentuserid');

	user_storaged = JSON.parse( localStorage.getItem( dir ) );	//user keys are objects 
	
	// update scores
	var string = element.id;
	user_storaged.score_total++;
	
	switch (string) {
		case "bass_drum1":
			user_storaged.score_drums++;
			break;
		case "bass_drum2":
			user_storaged.score_drums++;
			break;
		case "floor_tom":
			user_storaged.score_drums++;
			break;
		case "hanging_toms_left":
			user_storaged.score_drums++;
			break;
		case "hanging_toms_right":
			user_storaged.score_drums++;
			break;
		case "snare_drum":
			user_storaged.score_drums++;
			break;
		case "hihat_left1":
			user_storaged.score_cymbals++;
			break;
		case "hihat_left2":
			user_storaged.score_cymbals++;
			break;
		case "hihat_right":
			user_storaged.score_cymbals++;
			break;
	}
	
	//save the new scores on the localstorage
	localStorage[ dir ] = JSON.stringify(user_storaged);
	
	//play the sound
	var audio = element.children[0];
	
	if (audio.paused)	audio.play();
		else{
			audio.pause();
			audio.load(); //if i not include this line, the audio doesnt restart the song, just play/pause
			audio.play();
		}
	
}