document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
       
        confirmationMessage.style.display = 'block';
       
        form.reset();
    });

    
    function displayMatches() {
        const matchList = document.querySelector('.match-list'); 

        
        const upcomingMatches = [
            { teams: 'Team A vs Team B', date: 'July 15, 2024', time: '7:00 PM', location: 'Stadium Name' },
            { teams: 'Team C vs Team D', date: 'July 20, 2024', time: '6:30 PM', location: 'Another Stadium' }
            
        ];

      
        matchList.innerHTML = '';

       
        upcomingMatches.forEach(match => {
            const matchItem = document.createElement('div');
            matchItem.classList.add('match-item');
            matchItem.innerHTML = `
                <h3>${match.teams}</h3>
                <p>Date: ${match.date}</p>
                <p>Time: ${match.time}</p>
                <p>Location: ${match.location}</p>
            `;
            matchList.appendChild(matchItem); 
        });
    }

    // Call the function to display matches when the page loads
    displayMatches();
});