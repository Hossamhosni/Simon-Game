(function () {

	'use strict';

	var pattern = [];
	pattern[0] = Math.floor(Math.random() * (4-1));
	var simonSoundsUrl = "https://s3.amazonaws.com/freecodecamp/";
	var simonSounds = ["simonSound1.mp3", "simonSound2.mp3", "simonSound3.mp3", "simonSound4.mp3"];

	// cache dom elements
	var $blue  = $('#1');
	var $red = $('#2');
	var $yellow = $('#3');
	var $green = $('#4');

	var nextRound = function () {
		var intervalTime = 500;
		for (var i = 0;i < pattern.length;i++) {
			switch(pattern[i]) {
				case 0:
					setTimeout(function () {
						$blue.css('backgroundColor', 'blue');
					}, intervalTime);
					intervalTime += 500;
						setTimeout(function () {
							var j = 0;
							$blue.css('backgroundColor', '#094A8F')
						}, intervalTime);
						intervalTime += 500;
					break;
				case 1:
					setTimeout(function () {
						$red.css('backgroundColor', 'red');
					}, intervalTime);
					intervalTime += 500;

						setTimeout(function () {
							var j = 0;
							$red.css('backgroundColor', '#9F0F17')
						}, intervalTime);
						intervalTime += 500;
					break;
				case 2:
					setTimeout(function () {
						$yellow.css('backgroundColor', 'yellow');
					}, intervalTime);
					intervalTime += 500;

						setTimeout(function () {
							$yellow.css('backgroundColor', '#CCA707')
						}, intervalTime);
						intervalTime += 500;
					break;
				case 3:
					setTimeout(function () {
						$green.css('backgroundColor', 'green');
					},intervalTime);

					intervalTime += 500;
						setTimeout(function () {
							$green.css('backgroundColor', '#00A74A')
						}, intervalTime);
						intervalTime += 500;
					break;

			}
		}
	}


	var startGame = function () {

		nextRound();
		pattern.push(Math.floor(Math.random() * (5-1)));
	};

	var stopGame = function () {

	};

	$('.fa').click(function () {
		if ($('#start-stop').text() === "Start") {
			$(this).css('display', 'none');
			$('#toggle-on').css('display','block');
			$('#start-stop').text('Stop');
			startGame();
		} else if ($('#start-stop').text() === "Stop") {
			$(this).css('display', 'none');
			$('#toggle-off').css('display','block');
			$('#start-stop').text('Start');
			stopGame();
		}
	});

	$('.blue').click(function () {

	});
})();
