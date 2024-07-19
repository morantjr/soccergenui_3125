

document.addEventListener('DOMContentLoaded', function() {
    const trainers = [
        { name: 'John Razor', specialty: 'tactical', experience: 'high', image: 'Images/Johnrazor.jpg', description: 'Experienced coach specializing in tactical training and player development.' },
        { name: 'Ellie Williams', specialty: 'fitness', experience: 'medium', image: 'Images/Ellie williams.jpg', description: 'Former professional player with expertise in fitness and skill enhancement.' },
        { name: 'Coach Smith', specialty: 'youth', experience: 'high', image: 'Images/coach.jpg', description: 'Youth development coach focusing on technical skills and game strategy.' },
        { name: 'Mateo Segestes', specialty: 'agility', experience: 'medium', image: 'Images/Mateo segestes.jpg', description: 'Certified trainer specializing in agility training and physical conditioning.' }
    ];

    function displayTrainers(filteredTrainers) {
        const trainersList = document.getElementById('trainersList');
        trainersList.innerHTML = ''; 

        filteredTrainers.forEach(trainer => {
            const trainerCard = document.createElement('div');
            trainerCard.className = 'col-md-3 mb-4';
            trainerCard.innerHTML = `
                <img src="${trainer.image}" class="img-fluid" alt="${trainer.name}">
                <h3>${trainer.name}</h3>
                <p>${trainer.description}</p>
                <a href="#" class="btn btn-primary">Select Trainer</a>
            `;
            trainersList.appendChild(trainerCard);
        });
    }

    function filterTrainers() {
        const specialty = document.getElementById('specialty').value;
        const experience = document.getElementById('experience').value;

        const filteredTrainers = trainers.filter(trainer => {
            return (specialty === '' || trainer.specialty === specialty) &&
                   (experience === '' || trainer.experience === experience);
        });

        displayTrainers(filteredTrainers);
    }

    document.getElementById('filtersForm').addEventListener('submit', function(e) {
        e.preventDefault(); 
        filterTrainers();
    });

    
    displayTrainers(trainers);
});