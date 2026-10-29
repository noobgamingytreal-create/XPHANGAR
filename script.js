// Wait until the web page content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Find all the download buttons on the screen
    const downloadButtons = document.querySelectorAll('.download-btn');

    // Add a click handler to every single button dynamically
    downloadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Read the custom data attribute from the clicked HTML button
            const planeName = event.target.getAttribute('data-plane');
            
            // For now, trigger an alert showing what was picked
            alert(`Preparing download file stream for: ${planeName}`);
        });
    });

});
