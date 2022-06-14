const card = document.querySelector('.card'),
    toggleCard = document.querySelector('.toggle');

    toggleCard.onclick = function() {
        card.classList.toggle('active'); 
    }