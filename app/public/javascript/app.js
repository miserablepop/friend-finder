$(document).ready(function(){

    // Initialize Select inputs
    $('select').formSelect();

    // Initialize Modal
    $('.modal').modal();
    

    // for HTML5 "required" attribute
    $("select[required]").css({
        display: "inline",
        height: 0,
        padding: 0,
        width: 0
      });

    // Activate submit button
    $('#submitButton').on('click', function(event){
        event.preventDefault();

        // User inputs
        var userInput = {
            name: $('#userName').val().trim(),
            photo: $('#userPhoto').val().trim(),
            scores: [
                $('#question1').val().trim(),
                $('#question2').val().trim(),
                $('#question3').val().trim(),
                $('#question4').val().trim(),
                $('#question5').val().trim(),
                $('#question6').val().trim(),
                $('#question7').val().trim(),
                $('#question8').val().trim(),
                $('#question9').val().trim(),
                $('#question10').val().trim()
            ]
        };
        console.log('userInput = ' + JSON.stringify(userInput));

        // var currentURL = window.location.origin;

        $.post("/friends", userInput)
        .then(function(data) {
          console.log(data);
        });
    });
});