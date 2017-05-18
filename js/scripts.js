// business logic
$(document).ready(function() {
    /* functions */
    function Player(userName, score, turnTotal) {
        this.userName = userName;
        this.score = score;
        this.turnTotal = turnTotal;
    };

    Player.prototype.addScore = function(dice) {
        this.score += dice;
    };

    //ui logic
    var nameOne;
    var nameTwo;
    var score = 0;
    var turn_total = 0;
    var playerOne = new Player(nameOne, score, turn_total);
    var playerTwo = new Player(nameTwo, score, turn_total);
    var holdScoreOne = [];
    var holdScoreTwo = [];

    $('#rollOne').click(function() {
        var diceRoll = Math.floor(Math.random() * 6 + 1);
        if (diceRoll > 1) {
            playerOne.turnTotal += diceRoll;
            $('#output1 .diceroll').text("Roll: " + diceRoll);
            $('#output1 .total').text(playerOne.turnTotal);
            return;
        } else if (diceRoll === 1) {
            playerOne.turnTotal = 0;
            $('#output1 .diceroll').text("Roll: " + diceRoll);
            $('#output1 .total').text(playerOne.score);
            $(".turn1").show();
            $(".turn2").hide();
            $(".player1 button").prop('disabled', true);
            $(".player2 button").prop('disabled', false);
        }
    });
    $('#holdOne').click(function() {
        playerOne.addScore(playerOne.turnTotal);
        holdScoreOne.splice(0, 1, playerOne.score);
        $('#output1 .total').text(playerOne.score);
        // alert(holdScoreOne);
        $(".player2 button").prop('disabled', false);
        $(".player1 button").prop('disabled', true);
        $(".turn2").hide();
        if (holdScoreOne === 100) {
            $("#output").text("<h1> You Win!!!!</h1>");
        }
    });
    // Player Two Roll
    $('#rollTwo').click(function() {
        var diceRoll = Math.floor(Math.random() * 6 + 1);
        if (diceRoll > 1) {
            playerTwo.turnTotal += diceRoll;
            $('#output2 .diceroll').text("Roll: " + diceRoll);
            $('#output2 .total').text(playerTwo.turnTotal);
            return;
        } else if (diceRoll === 1) {
            playerTwo.turnTotal = 0;
            $('#output2 .diceroll').text("Roll: " + diceRoll);
            $('#output2 .total').text(playerTwo.score);
            $(".turn2").show();
            $(".turn1").hide();
            $(".player2 button").prop('disabled', true);
            $(".player1 button").prop('disabled', false);
        }
    });
    $('#holdTwo').click(function() {
        playerTwo.addScore(playerTwo.turnTotal);
        holdScoreTwo.splice(0, 1, playerTwo.score);
        $('#output2 .total').text(playerTwo.score);
        // alert(holdScoreOne);
        $(".player1 button").prop('disabled', false);
        $(".player2 button").prop('disabled', true);
        $(".turn1").hide();
        if (holdScoreTwo === 100) {
            $("#output").text("<h1> You Win!!!!</h1>");
        };
    });
    /*-------------Animations--------------*/
    $('.subtitle').click(function() {
        nameOne = $("#nameOne").val();
        nameTwo = $("#nameTwo").val();
        if (nameOne === "" || nameTwo === "") {
            alert("Enter a Name!");
            return;
        };
        $('#introduction').slideUp("2000");
        setTimeout(function() {
            $('.container').slideDown(800);
        }, 500)
        $('.player1 h1').text(nameOne);
        $('.player2 h1').text(nameTwo);
    })
}); /* doc .ready ending*/
