var trivia = {
    question: [
        'Who is the main character of "The Legend of Zelda" series?',
        'What piece of the Triforce does Ganon possess in most games?',
        'How long does Link have to save the land of Termina in Majora\'\s Mask?',
        'Hey! Listen! What is the name of Link\'\ fairy companion from Ocarina of Time?',
        'How many heart container do you need in order to obtain the Master Sword in Breath of The Wild?'
    ],
    responses: [
        [
            'Link',
            'Zelda',
            'Ganon',
            'Epona'
        ],
        [
            'Wisdom',
            'Power',
            'Courage',
            'Love'
        ],
        [
            '8 hours',
            '1 day',
            '3 days',
            '1 week'
        ],
        [
            'Fi',
            'Tael',
            'Midna',
            'Navi'
        ],
        [
            '3',
            '8',
            '13',
            '18'
        ]
    ],
    answer: ['A', 'B', 'C', 'D', 'C']
}
var counter;
var time;
var qnum ;
var paused;
var correct = 0;
var incorrect = 0;
$("#start").on("click", function () {
    $("#start,.results").css("display", "none");
    qnum=1;
    startQ();
})
$(".answer").on("click", function () {
    endQ($(this).attr("id"));
})
function startQ() {
    clearInterval(counter);
    time = 10;
    counter = setInterval(countdown, 1000);
    paused = false;
    $(".answer").css({"display": "block","font-size": "2em","pointer-events": "initial"});
    askQ();
    timer();
}
function askQ() {
    $("#qnum").text("Question #" + qnum);
    $("#question").text(trivia.question[qnum-1]);
    $("#A").text(trivia.responses[qnum - 1][0]);
    $("#B").text(trivia.responses[qnum - 1][1]);
    $("#C").text(trivia.responses[qnum - 1][2]);
    $("#D").text(trivia.responses[qnum - 1][3]);
}
function countdown() {
    time--;
    if ((time == 0) && (paused == false)) {
        endQ(null);
    }
    else if ((time == 0) && (paused == true)) {
        startQ();
    }
    timer();
}
function timer() {
    if (paused == true)
        $("#timer").text(time);
    else
        $("#timer").text("Time Remaining: " + time);
}
function endQ(answer) {
    paused = true;
    clearInterval(counter);
    time = 5;
    timer();
    console.log(answer);
    $(".answer").css({"display": "none","pointer-events": "none"});
    $("#"+trivia.answer[qnum-1]).css({"display": "block","font-size": "4em"});
    if (answer == trivia.answer[qnum - 1]) {
        $("#question").text("Your answer was correct!");
        correct++;
    }
    else{
        $("#question").text("Your answer was wrong. The correct answer was " + trivia.answer[qnum - 1])
        incorrect++;
    }
    qnum++;
    if (qnum == 6) {
        setTimeout(endAll, 5000);
    }
    else 
    $("#qnum").text("Question #" + qnum + " begins in");
    counter = setInterval(countdown, 1000);
}
function endAll() {
    $("#qhead,.answers").css("display","none");
    $("#start").css("display","inline-block").text("Retry");
    $(".results").css("display","block");
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
}