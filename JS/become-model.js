// Form Input Variables
const radioButtons = document.querySelectorAll('input[type="radio"]');
const textArea = document.getElementById('model-experience-description');

// Copilot suggestion Modification
// if "Yes" is selected, show the text area. If "No" is selected, hide the text area.
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        // If "yes" is selected
        if (radio.value === 'yes' && radio.checked) {
            textArea.style.display = 'flex';
            textArea.style.flexDirection = 'column';
          // If "no" is selected
        } else if (radio.value === 'no' && radio.checked) {
            textArea.style.display = 'none';
        } 
    });
});