var s1:HTMLAudioElement = new Audio('assets/A.mp3');
var s2:HTMLAudioElement = new Audio('assets/C.mp3');
var s3:HTMLAudioElement = new Audio('assets/F.mp3');
var s4:HTMLAudioElement = new Audio('assets/G.mp3');
var s5:HTMLAudioElement = new Audio('assets/hihat.mp3');
var s6:HTMLAudioElement = new Audio('assets/kick.mp3');
var s7:HTMLAudioElement = new Audio('assets/laugh-1.mp3');
var s8:HTMLAudioElement = new Audio('assets/laugh-2.mp3');
var s9:HTMLAudioElement = new Audio('assets/snare.mp3');

var sound:HTMLAudioElement [] = [s1,s2,s3,s4,s5,s6,s7,s8,s9];

function playsample (z:number) {
sound[z].play();
}
function beat (){
 setInterval(function(){playsample(5);playsample(8);playsample(4);},500);
}
window.addEventListener('load', function(){
    document.getElementById("b1").addEventListener("click",function(){playsample(0);});
    document.getElementById("b2").addEventListener("click",function(){playsample(1);});
    document.getElementById("b3").addEventListener("click",function(){playsample(2);});
    document.getElementById("b4").addEventListener("click",function(){playsample(3);});
    document.getElementById("b5").addEventListener("click",function(){playsample(4);});
    document.getElementById("b6").addEventListener("click",function(){playsample(5);});
    document.getElementById("b7").addEventListener("click",function(){playsample(6);});
    document.getElementById("b8").addEventListener("click",function(){playsample(7);});
    document.getElementById("b9").addEventListener("click",function(){playsample(8);});
    document.getElementById("pb").addEventListener("click", beat );
});
