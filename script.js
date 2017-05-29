(function () {

	'use strict';

	var pattern = [];
	pattern[0] = Math.floor(Math.random() * (4-1));

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
						document.getElementById('blueAudio').play();
					}, intervalTime);
					intervalTime += 500;
						setTimeout(function () {
							var j = 0;
							$blue.css('backgroundColor', '#094A8F');
						}, intervalTime);
						intervalTime += 500;
					break;
				case 1:
					setTimeout(function () {
						$red.css('backgroundColor', 'red');
						document.getElementById('redAudio').play();
					}, intervalTime);
					intervalTime += 500;

						setTimeout(function () {
							var j = 0;
							$red.css('backgroundColor', '#9F0F17');
						}, intervalTime);
						intervalTime += 500;
					break;
				case 2:
					setTimeout(function () {
						$yellow.css('backgroundColor', 'yellow');
						document.getElementById('yellowAudio').play();
					}, intervalTime);
					intervalTime += 500;

						setTimeout(function () {
							$yellow.css('backgroundColor', '#CCA707');
						}, intervalTime);
						intervalTime += 500;
					break;
				case 3:
					setTimeout(function () {
						$green.css('backgroundColor', 'green');
						document.getElementById('greenAudio').play();
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
		score = 0;
		$('#count').text('Count: 0');
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

	$('.button').mousedown(function () {
		if (!start) return;
		var wrong = false;
		if ($(this).attr('id') === '0') {
			$blue.css('backgroundColor', 'blue');
			document.getElementById('blueAudio').play();
			if (pattern[nextMoveIndex] !== 0) {
				wrongAnswer();
				wrong = true;
			}
		} else if ($(this).attr('id') === '1') {
			document.getElementById('redAudio').play();
			$red.css('backgroundColor', 'red');
			if (pattern[nextMoveIndex] !== 1) {
				wrongAnswer();
				wrong = true;
			}
		} else if ($(this).attr('id') === '2') {
				document.getElementById('yellowAudio').play();
				$yellow.css('backgroundColor', 'yellow');
			if (pattern[nextMoveIndex] !== 2) {
				wrongAnswer();
				wrong = true;
			}
		} else if ($(this).attr('id') === '3') {
			document.getElementById('greenAudio').play();
			$green.css('backgroundColor', 'green');
			if (pattern[nextMoveIndex] !== 3) {
				wrongAnswer();
				wrong = true;
			}
		}

		if (!wrong)
			nextMoveIndex++;
		if (nextMoveIndex === pattern.length)
		{
			score++;
			$('#count').text('Count: ' + score);
			pattern.push(Math.floor(Math.random() * (5-1)));
			setTimeout(function () {
				var time = nextRound();
			}, 500);

			setTimeout(function () {
				$('.button').css('pointerEvents', 'auto');
			}, 1000000 * 2);
		}
	});

	$('.button').mouseup(function () {
		$blue.css('backgroundColor', '#094A8F');
		$red.css('backgroundColor', '#9F0F17');
		$yellow.css('backgroundColor', '#CCA707');
		$green.css('backgroundColor', '#00A74A');
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
