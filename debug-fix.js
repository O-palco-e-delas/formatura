// Debug script to check if talks array exists and is accessible
document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug: Checking if talks array is accessible in palestras.html');
    
    try {
        if (typeof talks !== 'undefined') {
            console.log('Success: Talks array found with', talks.length, 'items');
            
            // Código de correção para palestras removido - Camila Marques e Laryssa Rocha não fazem mais parte do evento
            
            // Now render the talks
            if (typeof renderTalksPage === 'function') {
                console.log('Calling renderTalksPage() function');
                renderTalksPage();
            } else {
                console.error('Error: renderTalksPage function not found');
            }
            
            // Render timeline as well
            if (typeof renderScheduleTimeline === 'function') {
                console.log('Calling renderScheduleTimeline() function');
                renderScheduleTimeline();
            }
        } else {
            console.error('Error: talks array is not defined or not accessible');
        }
    } catch (error) {
        console.error('Error in debug script:', error);
    }
});
