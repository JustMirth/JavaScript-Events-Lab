// Hover Event
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', function() {
    hoverButton.textContent = 'I have changed';
});
hoverButton.addEventListener('mouseleave', function() {
    hoverButton.textContent = 'This will change';
});

// Keyboard Event
const keyboardInput = document.getElementById('keyboardInput');
const keyPressedMessage = document.getElementById('keyPressedMessage');
keyboardInput.addEventListener('keydown', function(event) {
    keyPressedMessage.textContent = `You just pressed the ${event.key} key`;
});

// Form Event
const eventForm = document.getElementById('eventForm');
const formSubmitMessage = document.getElementById('formSubmitMessage');
eventForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formSubmitMessage.textContent = 'Form has been submitted'
});

//Focus and Blur Event
const focusBlurInput = document.getElementById('focusBlurInput');
const focusBlurMessage = document.getElementById('focusBlurMessage');
focusBlurInput.addEventListener('focus', function() {
    focusBlurMessage.textContent = 'Input field is focused';
});
focusBlurInput.addEventListener('blur', function() {
    focusBlurMessage.textContent = 'Input field is blurred';
});