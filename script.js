window.onload = function() {
    var  sec = 0 ;
    var min = 0;
    var minid = document.getElementById("min");
    var secid = document.getElementById("sec");
    var sbutton = document.getElementById("Start");
    var stbutton =document.getElementById("Stop");
    var rbutton = document.getElementById("Reset");
    var laps ;

    sbutton.onclick = function() {
        clearInterval(laps);
        laps = setInterval(startTimer , 10);
    }
    stbutton.onclick = function() {
        clearInterval(laps);
    }
    rbutton.onclick = function() {
        clearInterval(laps);
        min = "00";
        sec = "00";
        minid.innerHTML = min ;
        secid.innerHTML = sec ;
    }

    function startTimer() {
        min++ ;
        if (min <=9 ){
            minid.innerHTML = "0" + min ;
        }
        if(min > 9){
            minid.innerHTML = min ;
        }
        if (min > 99){
            console.log("seconds");
            sec++ ;
            secid.innerHTML = "0"+sec ;
            min = 0;
            minid.innerHTML = "0"  +0 ;
        }
        if (sec > 9){
            secid.innerHTML = sec ;
        }
    }
}