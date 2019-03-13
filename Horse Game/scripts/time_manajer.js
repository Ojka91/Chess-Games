function resetTime(){
    clearInterval(cronometer);
}

function startTime() {
    seconds = 0;


    cronometer = setInterval(function () {
        seconds++;
        secs = seconds;
        mins = 0;
        while (secs >= 60) {
            mins++;
            secs -= 60;
        }
        if(mins<10) document.getElementById("minutes").innerHTML = "0"+mins;
        else document.getElementById("minutes").innerHTML = mins;
        if(secs<10)   document.getElementById("seconds").innerHTML ="0"+ secs;
        else   document.getElementById("seconds").innerHTML = secs;
        
        myApp.totalSecs = secs;
        myApp.total_mins = mins;
    }, 1000);
}