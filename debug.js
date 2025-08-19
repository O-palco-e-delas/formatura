// Debug script to check the palestras.html page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug script loaded');
    
    // Check if talks array exists
    if (typeof talks !== 'undefined') {
        console.log('Talks array found:', talks.length, 'items');
    } else {
        console.error('Error: talks array is not defined or not accessible');
    }
    
    // Check DOM elements
    const container = document.getElementById('talks-container');
    if (container) {
        console.log('Talks container found');
    } else {
        console.error('Error: #talks-container element not found');
    }
    
    // Check renderTalksPage function
    if (typeof renderTalksPage === 'function') {
        console.log('renderTalksPage function found');
    } else {
        console.error('Error: renderTalksPage function is not defined or not accessible');
    }
});
