// 課題
var inputElement = document.getElementById('1');
var spanElement = document.createElement('span');
inputElement.parentNode.insertBefore(spanElement, inputElement.nextSibling);
inputElement.addEventListener('blur', function() {
    var inputValue = inputElement.value;
    var existingText = spanElement.textContent || '';
    spanElement.textContent = existingText + inputValue;
    inputElement.value = '';
});