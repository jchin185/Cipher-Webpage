define(function() {
	// Removes extra whitespace from string
	function sanitize(text) {
		return text.trim();
	}
	// Tests if English alphabet character
	function isAlphaChar(char) {
		return /[a-zA-Z]/.test(char);
	}
	// Tests if the character is upper case
	// Precondition: character is in the English alphabet
	function isUpperCase(char) {
		return /[A-Z]/.test(char);
	}
	function caesarCipherEncrypt(text, shift) {
		var encryptedString = '';
		var cleanText = sanitize(text);
		// Transform each character in the word if it is in the English alphabet
		// else leave as is
		for (var i = 0, length = cleanText.length; i < length; i++) {
			var currChar = cleanText[i];
			if (isAlphaChar(currChar)) {
				var isUpper = isUpperCase(currChar);
				var newCharVal = currChar.charCodeAt() + shift % 26;
				// Correct if the shift goes beyond the bound
				if ((isUpper && newCharVal < 'A'.charCodeAt()) || (!isUpper && newCharVal < 'a'.charCodeAt())) {
					newCharVal += 26;
				} else if ((isUpper && newCharVal > 'Z'.charCodeAt()) || (!isUpper && newCharVal > 'z'.charCodeAt())) {
					newCharVal -= 26;
				}
				var newChar = String.fromCharCode(newCharVal);
				encryptedString += newChar;
			} else {
				encryptedString += currChar;			
			}
		}
		return encryptedString;
	}

	return {
		caesarCipherEncrypt: caesarCipherEncrypt
	}
});
