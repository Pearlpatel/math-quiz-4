player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("name1").innerHTML=player1+ " : ";
document.getElementById("name2").innerHTML=player2+ " : ";
document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;

document.getElementById("question").innerHTML="Question Turn - "+player1;
document.getElementById("answer").innerHTML="Answer Turn - "+player2;

function send() {
    number1=document.getElementById("input_number1").value;
    number2=document.getElementById("input_number2").value;
    real_answer=Number(number1)*Number(number2);

question_statement="<h3>"+ number1 +  "x"   + number2 +"</h3>";
answer_input="<br> Answer: <input type='text' id='a'>";
check_b="<br> <br> <button id='check_button' onclick='check_answer()'>Check</button>";
full_output=question_statement+answer_input+check_b;
document.getElementById("output").innerHTML=full_output;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";

function check_answer(){
    get_a=document.getElementById("a").value;
    if (get_a==real_answer) {
        if (answer_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById("score1").innerHTML=player1_score;
        } else {
            player2_score=player2_score+1;
            document.getElementById("score2").innerHTML=player2_score;
        }
    }
    if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("question").innerHTML="Question Turn - "+player2;
    } else {
        question_turn=="player1";
        document.getElementById("question").innerHTML="Question Turn - "+player1;
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
        document.getElementById("answer").innerHTML="Answer Turn - "+player2;
    } else {
        answer_turn=="player1";
        document.getElementById("answer").innerHTML="Answer Turn - "+player1;
    }
}

