document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Display confirmation message
        confirmationMessage.style.display = 'block';
        // Reset the form fields
        form.reset();
    });

    // Function to fetch and display upcoming matches
    function displayMatches() {
        const matchList = document.querySelector('.match-list'); // Assuming you have a container with class="match-list"

        // Example data for upcoming matches (can be fetched from a server in real scenario)
        const upcomingMatches = [
            { teams: 'Team A vs Team B', date: 'July 15, 2024', time: '7:00 PM', location: 'Stadium Name' },
            { teams: 'Team C vs Team D', date: 'July 20, 2024', time: '6:30 PM', location: 'Another Stadium' }
            // Add more matches as needed
        ];

        // Clear any existing HTML to ensure clean update
        matchList.innerHTML = '';

        // Loop through each match and create HTML elements
        upcomingMatches.forEach(match => {
            const matchItem = document.createElement('div');
            matchItem.classList.add('match-item');
            matchItem.innerHTML = `
                <h3>${match.teams}</h3>
                <p>Date: ${match.date}</p>
                <p>Time: ${match.time}</p>
                <p>Location: ${match.location}</p>
            `;
            matchList.appendChild(matchItem); // Append each match item to the matchList container
        });
    }

    // Call the function to display matches when the page loads
    displayMatches();
});