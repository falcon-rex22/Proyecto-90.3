var J1 = localStorage.getItem("Jugador 1");
var J2 = localStorage.getItem("Jugador 2");
J1Score = 0;
J2Score = 0;

document.getElementById("PlayerName1").innerHTML = J1;
document.getElementById("PlayerName2").innerHTML = J2;
document.getElementById("PlayerScore1").innerHTML = J1Score;
document.getElementById("PlayerScore2").innerHTML = J2Score;
document.getElementById("PlayerQuiz").innerHTML = "turno para preguntar = " + J1
document.getElementById("PlayerAnswer").innerHTML = "turno para responder = " + J2