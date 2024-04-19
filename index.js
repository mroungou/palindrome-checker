const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function checkPalindrome(str) {
    // need to remove spaces and punctuation, and convert to lowercase
    const clearnStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //regex removes everything but letters

    // compare the characters from start to end and end to start

    for (let i = 0; i < clearnStr.length / 2; i++) {
        if (clearnStr[i] !== clearnStr[clearnStr.length - 1 - i]) {
            resultDiv.textContent = `${str} is not a palindrome`;
            return false; //not a palindrome
        }
    }

    resultDiv.textContent = `${str} is a palindrome`
    return true;

}

checkBtn.addEventListener('click', () => {
    const string = input.value
    if (string === '') {
        alert('Please input a value');
    } else {
        checkPalindrome(string);
    }
});