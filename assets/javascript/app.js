var trivia={
    responses: [
        ['','','',''],
        ['','','',''],
        ['','','',''],
        ['','','',''],
        ['','','','']
    ],
    answers: ['a','b','c','d','a']
}
var counter;
var time;
var qnum=1;
var state;
$("#start").on("click",function(event){
    time=30;
    counter=setInterval(countdown,1000);
    $("#start").css("display", "none");
    askQ();
    timer();
})
function askQ(){
    $("#qnum").text("Question #"+qnum);
    $("#a").text(trivia.responses[qnum-1][0]);
    $("#b").text(trivia.responses[qnum-1][1]);
    $("#c").text(trivia.responses[qnum-1][2]);
    $("#d").text(trivia.responses[qnum-1][3]);
}
function countdown(){
    time--;
    if(time==0){
        endQ();
        return;
    }
    timer();
}
function timer(){
    var statement;
    if(state=="paused")
    $("#timer").text(time);
    else
    $("#timer").text("Time Remaining: "+time);
}
function endQ(){
    timer = clearInterval();
    qnum++;
    state="paused";
    $("#qnum").text("Question "+qnum+"begins in")
    timer = setInterval(countdown,1000);
}