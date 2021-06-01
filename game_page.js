var player1name=localStorage.getItem("player_1");
var player2name=localStorage.getItem("player_2");

var player1score=0;
var player2score=0;

document.getElementById("player1name").innerHTML=player1name+": ";
document.getElementById("player2name").innerHTML=player2name+": ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("questionturn").innerHTML="Question Turn: "+player1name;
document.getElementById("answerturn").innerHTML="Answer Turn: "+player2name;

function send(){

var get_num1=document.getElementById("num1").value;
var get_num2=document.getElementById("num2").value;


question_word="<h4 id='question_word'>Q."+get_num1+x+get_num2+"</h4>";
input_box="<br>Answer: <input type='number' id='answer'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
row=question_word+input_box+check_button;

document.getElementById("output").innerHTML=row;


}