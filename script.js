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