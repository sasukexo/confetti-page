var snd = new Audio("song.mp3");
function play(){
    console.log("play");
    snd.currentTime=1;
    snd.play();
    console.log("success");
}