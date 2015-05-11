app.controller('FlashCardController', function($scope) {
	$scope.answeredCorrectly = null;
	$scope.answered = null;
	$scope.flashCard = {
		question: 'What is Angular?',
		answers: [
		{ text: 'A front-end framework for great power!', correct: true },
		{ text: 'Something lame, who cares, whatever.', correct: false },
		{ text: 'Some kind of fish, right?', correct: false }
		]
	};
	$scope.answerQuestion = function(answer){
		console.log(answer);
		$scope.answered = true;
		$scope.answeredCorrectly = answer.correct;
	};
});
