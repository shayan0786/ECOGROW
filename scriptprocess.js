// processing-script.js
var countdown;

window.onload = function () {
    startCountdown(5 * 60);
};

function startCountdown(seconds) {
    var timerDisplay = document.getElementById('timer');
    var endTime = new Date().getTime() + seconds * 1000;

    countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = endTime - now;

        if (distance <= 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = 'Payment completed!';
        } else {
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerDisplay.innerHTML = 'Time remaining: ' + minutes + 'm ' + seconds + 's';
        }
    }, 1000);
}
