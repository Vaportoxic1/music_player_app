let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let playpauses = document.getElementById("ctrIcon");
    let forward = document.getElementById("forward-song");
    let backward = document.getElementById("backward-song");

    let play_flag;
    song.onloadedmetadata = function(){
        play_flag = 0; 
        progress.max = song.duration;
        progress.value = song.currentTime;   
    }

    function playpause(status){
        if(status === 0){
            song.play();
            play_flag = 1;
            playpauses.classList.remove("fa-play");
            playpauses.classList.add("fa-pause");            
        }else{
            song.pause();
            play_flag = 0;
            playpauses.classList.remove("fa-pause");
            playpauses.classList.add("fa-play");
        }
    }

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    });
}
playpauses.addEventListener("click", ()=>{
     playpause(play_flag);

});

progress.addEventListener("input", ()=>{
    song.play();
    song.currentTime = progress.value;
    let data = song.currentTime;
    console.log(data);
    playpauses.classList.remove("fa-play");
    playpauses.classList.add("fa-pause");
});

forward.addEventListener("click", ()=>{
    forwardSong();
});
backward.addEventListener("click", ()=>{
    backwardSong();
});
function forwardSong(){
    let max_length = song.duration;
    let current_length = song.currentTime;
    let desired_length;

    if(current_length < max_length){
        song.play();
        desired_length = current_length + 4;
        progress.value = desired_length;
        song.currentTime = progress.value;
    }
}

function backwardSong(){
    let max_length = song.duration;
    let current_length = song.currentTime;
    let desired_length;

    if(current_length < max_length){
        song.play();
        desired_length = current_length - 4;
        progress.value = desired_length;
        song.currentTime = progress.value;
    }
}
