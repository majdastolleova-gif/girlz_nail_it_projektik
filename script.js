const button = document.getElementById('predictButton');
const result = document.getElementById('fortuneResult');

const breakfastSuggestions = [
  'Salmon with a splash of cream',
  'Tuna pâté with treats',
  'Chicken with tuna flakes',
  'Salmon on butter with crispy bits',
  'Creamy pâté with herbs',
  'Chicken with salmon chunks',
  'Creamy tuna mix with catnip',
];

function getRandomSuggestion() {
  const index = Math.floor(Math.random() * breakfastSuggestions.length);
  return breakfastSuggestions[index];
}

function createRainingCats() {
  const rainPhoto = 'https://placekitten.com/80/80';

  let rainCount = 0;
  const rainInterval = setInterval(() => {
    if (rainCount >= 15) {
      clearInterval(rainInterval);
      return;
    }

    const cat = document.createElement('img');
    cat.className = 'rain-cat';
    cat.src = `${rainPhoto}?t=${Date.now()}`;
    cat.alt = 'Cat photo head';
    cat.style.left = Math.random() * 100 + '%';
    cat.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';
    document.body.appendChild(cat);

    setTimeout(() => cat.remove(), 4500);
    rainCount++;
  }, 150);
}

button.addEventListener('click', () => {
  const suggestion = getRandomSuggestion();
  result.innerHTML = `You should eat: <strong>${suggestion}</strong>`;
  result.classList.remove('hidden');
  createRainingCats();
});
