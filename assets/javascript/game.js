
let randomTargetScore;
let losses = 0;
let wins = 0;
let currentScore = 0;


//allows for replays while maintaining player record
const replay = function () {

    //resets crystals & user score    
    $(".crystals").empty();

    let images = [
            "https://natashaskitchen.com/wp-content/uploads/2017/04/Easter-Egg-Chicks-5.jpg", 
            "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/p/2000/polka-dot-easter-eggs.ashx?vd=20180710T033521Z&hash=7CD8A06C15D02AB66A73A4B193B5D8C316C23D36",
            "https://www.aftcra.com/uploads/cache/products/i/l/il_fullxfull_766362331_463g_2015_05_15_21_45_53_2112555485_111843_181851_579x.jpg",
            "https://www.thorntons.co.uk/dw/image/v2/BBKV_PRD/on/demandware.static/-/Sites-thorntons-live-products/default/dwa8a7dfe9/product-images/2019-2020/Spring-S2/New-Easter-Images/77180442-NutPraline-Egg-Iced.jpg?sw=1350&sh=1000&sm=fit"
        ];

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
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
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

