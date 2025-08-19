// Debug script to check if talks array exists and is accessible
document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug: Checking if talks array is accessible in palestras.html');
    
    try {
        if (typeof talks !== 'undefined') {
            console.log('Success: Talks array found with', talks.length, 'items');
            
            // Fix the missing tags property in Camila's talk (id: 16)
            for (let i = 0; i < talks.length; i++) {
                if (talks[i].id === 16 && !talks[i].tags) {
                    console.log('Fixing missing tags for talk ID 16');
                    talks[i].tags = ["Airflow", "Engenharia de Dados", "Carreira"];
                }
            }
            
            // Remove duplicate talk (keeping only one version of Camila's talk)
            if (talks.length === 17) {
                const uniqueTalks = talks.filter((talk, index) => {
                    // Check for duplicate entries
                    if (talk.id === 16 || talk.id === 17) {
                        if (talk.speaker === "Camila Marques" && talk.title === "Introdução ao Airflow: Como Orquestrar Pipelines de Dados") {
                            // Keep only one instance (the first one found)
                            return index === talks.findIndex(t => t.speaker === "Camila Marques" && 
                                                              t.title === "Introdução ao Airflow: Como Orquestrar Pipelines de Dados");
                        }
                    }
                    return true;
                });
                
                console.log('Removed duplicates, now have', uniqueTalks.length, 'talks');
                window.talks = uniqueTalks;
            }
            
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
