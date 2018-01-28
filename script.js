var player;

window.onload=function () {
	player=document.getElementById('player');
}

function playMusic(){
	player.play();
}

function pauseMusic(){
	player.pause();
}

function stopMusic(){
	player.pause();
	player.currentTime=0;
}

function volDown() {

	console.log(player.volume);
	if(player.volume >=0) {
		player.volume-=0.1;
	}else{
		player.volume=0;
	}
}

function volUp() {

	console.log(player.volume);
	if(player.volume >=0) {
		player.volume+=0.1;
	}else{
		player.volume=0;
	}
}