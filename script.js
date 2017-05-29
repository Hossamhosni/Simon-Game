(function () {

	'use strict';

	var pattern = [];
	pattern[0] = Math.floor(Math.random() * (4-1));
	var simonSoundsUrl = "https://s3.amazonaws.com/freecodecamp/";
	var simonSounds = ["simonSound1.mp3", "simonSound2.mp3", "simonSound3.mp3", "simonSound4.mp3"];

	// cache dom elements
	var $blue  = $('#0');
	var $red = $('#1');
	var $yellow = $('#2');
	var $green = $('#3');


	var nextMoveIndex = 0;
	var strict = false;
	var score = 0;
	var start = false;

	var wrongAnswer = function () {
		if (strict) {
			pattern = [];
			pattern[0] = Math.floor(Math.random() * (4-1));
			score = 0;
			$('#count').text('Count: ' + score);
		}
		nextRound();
	}

	var nextRound = function () {
		nextMoveIndex = 0;
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
		return intervalTime;
	}


	var startGame = function () {
		start = true;
		$('.button').css('pointerEvents', 'none');
		var time = nextRound();
		setTimeout(function () {
			$('.button').css('pointerEvents', 'auto');
		}, time);
	}

	var stopGame = function () {
		pattern = [];
		var highestTimeoutId = setTimeout(";");
		for (var i = 0 ; i < highestTimeoutId ; i++) {
		    clearTimeout(i);
		}
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

	$('.button').click(function () {
		if (!start) return;
		var wrong = false;
		if ($(this).attr('id') === '0') {
			$blue.css('backgroundColor', 'blue');
			if (pattern[nextMoveIndex] !== 0) {
				wrongAnswer();
				wrong = true;
			}
		} else if ($(this).attr('id') === '1') {
			if (pattern[nextMoveIndex] !== 1) {
				$red.css('backgroundColor', 'red');
				wrongAnswer();
				wrong = true;
			}
		} else if ($(this).attr('id') === '2') {
			if (pattern[nextMoveIndex] !== 2) {
				$yellow.css('backgroundColor', 'yellow');
				wrongAnswer();
				wrong = true;
			}
		} else if ($(this).attr('id') === '3') {
			if (pattern[nextMoveIndex] !== 3) {
				$green.css('backgroundColor', 'green');
				wrongAnswer();
				wrong = true;
			}
		}
		$blue.css('backgroundColor', '#094A8F');
		$red.css('backgroundColor', '#9F0F17');
		$yellow.css('backgroundColor', '#CCA707');
		$green.css('backgroundColor', '#00A74A');
		if (!wrong)
			nextMoveIndex++;
		if (nextMoveIndex === pattern.length)
		{
			score++;
			$('#count').text('Count: ' + score);
			pattern.push(Math.floor(Math.random() * (5-1)));
			var time = nextRound();
			setTimeout(function () {
				$('.button').css('pointerEvents', 'auto');
			}, time);
		}
	});

	$('#strict').click(function () {
		if (strict) {
			strict = false;
			$('#strict').css('backgroundColor', 'black');
		}
		else {
			strict = true;
			$(this).css('backgroundColor', 'red');
		}
	});
})();
