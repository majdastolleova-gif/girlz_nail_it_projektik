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
  const rainPhoto = 'ChatGPT Image 22. 6. 2026 11_26_17.png';

  let rainCount = 0;
  const rainInterval = setInterval(() => {
    if (rainCount >= 18) {
      clearInterval(rainInterval);
      return;
    }

    const cat = document.createElement('img');
    cat.className = 'rain-cat';
    cat.src = `${rainPhoto}?t=${Date.now()}`;
    cat.alt = 'Kočičí obrázek';
    cat.style.left = Math.random() * 100 + '%';
    const duration = 2.8 + Math.random() * 1.8;
    cat.style.animationDuration = duration + 's';
    const size = 28 + Math.floor(Math.random() * 56);
    cat.style.width = size + 'px';
    cat.style.height = size + 'px';
    document.body.appendChild(cat);

    setTimeout(() => cat.remove(), Math.ceil(duration * 1000) + 500);
    rainCount++;
  }, 120);
}

button.addEventListener('click', () => {
  const suggestion = getRandomSuggestion();
  result.innerHTML = `You should eat: <strong>${suggestion}</strong>`;
  result.classList.remove('hidden');
  createRainingCats();
});
