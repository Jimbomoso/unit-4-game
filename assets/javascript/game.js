
let randomTargetScore;
let losses = 0;
let wins = 0;
let currentScore = 0;


//allows for replays while maintaining player record
const replay = function () {

    //resets crystals & user score    
    $(".crystals").empty();

    // let images = ["","","",""];

    //generates a random number between 19 and 120 for targetScore
    randomTargetScore = Math.floor(Math.random() * 120) + 19;

    //replace Target Score default w/ generated number in score
    $("#targetS").html(randomTargetScore);
    $("#userS").html(currentScore);
    $(".wins").html(wins);
    $(".losses").html(losses);

    //main for loop
    for (let i = 0; i < 4; i++) {
        
        //generate a random crystal value between 1-12
        let crystalVal = Math.floor(Math.random() * 11) + 1;

        //assign value to crystal element
        let crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "dataRandom": crystalVal
            });

        //replace crystals element with crystal
        $(".crystals").append(crystal);

    }

}

replay();

//what to do when crystal clicked

$(document).on("click", ".crystal", function() {
    
    //adds current value of crystal clicked to current score 
    let num = parseInt($(this).attr("dataRandom"));
    currentScore += num;
    
    //displays current score in user score box
    $("#userS").html(currentScore);

    //game logic for wins/losses
    if(currentScore > randomTargetScore) {
        losses++;
        $(".losses").html(losses);
        currentScore = 0;
        alert("You lose!");
        replay();
    } else if(currentScore === randomTargetScore) {
        wins++;
        $(".wins").html(wins);
        currentScore = 0;
        replay();
        alert("You win!");    
    }
});

// function timedRefresh(timeoutPeriod) {
//     setTimeout("location.reload(true);", timeoutPeriod);
// }

// window.onLoad = timedRefresh(1000);

