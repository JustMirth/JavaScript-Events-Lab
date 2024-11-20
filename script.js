// Hover Event
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', function() {
    hoverButton.textContent = 'I have changed';
});
hoverButton.addEventListener('mouseleave', function() {
    hoverButton.textContent = 'This will change';
});