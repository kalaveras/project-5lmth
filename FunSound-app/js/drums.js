/*--
Author: 
Comments: 	
Todo:
--*/

function playPause(element){
	var audio = element.children[0];
	
	if (audio.paused)	audio.play();
		else{
			audio.pause();
			audio.load(); //if i not include this line, the audio doesnt restart the song, just play/pause
			audio.play();
		}
}