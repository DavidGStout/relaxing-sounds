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