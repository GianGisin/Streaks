function startButtonPressed(){
    if(document.getElementById('startbutton').innerHTML == 'Start'){
        document.getElementById('startbutton').innerHTML = 'Stop';
        startTimer();
    }
    else if(document.getElementById('startbutton').innerHTML == 'Stop'){
        document.getElementById('startbutton').innerHTML = 'Start';
        console.log("Clearing Interval")
        stopTimer();
    }
}

var Timer
var time = 0;
var totalTime = 0;

function startTimer(){
    Timer = setInterval(this.tick, 1000);
    document.getElementById('stopwatch').innerHTML = "00:00:00"
}

function tick() {
    time++;
    var remain = time;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var minutes = Math.floor(remain / 60);
    remain -= minutes * 60;
    var seconds = remain;

    if(hours < 10){hours = "0" + hours;}
    if(minutes < 10){minutes = "0" + minutes;}
    if(seconds < 10){seconds = "0" + seconds;}


    document.getElementById('stopwatch').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function stopTimer(){
    clearInterval(this.Timer);
    this.Timer = null;
    document.getElementById('stopwatch').innerHTML = " ";
    totalTime += time;
    if(totalTime/3600 >= 1){
        document.getElementById('time').innerHTML = Math.round(totalTime / 3600 * 10) / 10 + "hours";

    }else if(totalTime/60 >= 1){
        document.getElementById('time').innerHTML = Math.round(totalTime / 60 * 10) / 10 + "mins";
    }else{
        document.getElementById('time').innerHTML = totalTime + "seconds";
    }
    time = 0;
}

function doThis(){
    alert("This is where you'd be able to select your streak")
}

//hello

