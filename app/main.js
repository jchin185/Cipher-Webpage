define(function (require) {
    var cipher = require('cipher');

	document.getElementById('caesarEncrypt').addEventListener('click',function () {
			console.log('Encrypt button clicked!');
			var inputText = document.getElementById('caesarText').value;
			var shiftAmount = document.getElementById('caesarShiftAmount').value;
			var answer = cipher.caesarCipherEncrypt(inputText, shiftAmount)
			var answerDiv = document.getElementById('caesarAnswerDiv');
			answerDiv.style.display = 'block';
			var answerText = document.getElementById('caesarAnswer');
			answerText.innerHTML = '<p>' + answer + '</p>';
	});
});
