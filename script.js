
// Variables that will be utilized
var timerInterval
var secondsLeft
// GIVEN I am taking a code quiz
// WHEN I click the start button


// THEN a timer starts and I am presented with a question

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
