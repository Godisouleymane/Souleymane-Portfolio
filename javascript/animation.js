var options = {
    strings: ["DESIGNER UI/UX", "DEVELOPPEUR"],
    typeSpeed: 100,
    backSpeed: 50,
    showCursor: false,
    startDelay: 500,
    backDelay: 1000,
    loop: true
  };

  var typed = new Typed("#typing-text", options);


   // Fonction pour vérifier si un élément est dans la vue
   function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fonction pour activer les cartes visibles dans la vue
  function activateVisibleCards() {
    const cards = document.querySelectorAll('.technology');

    cards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('active');
      }
    });
  }

  // Événement de défilement pour activer les cartes au fur et à mesure du défilement
  window.addEventListener('scroll', activateVisibleCards);

  // Activation initiale des cartes lors du chargement de la page
  document.addEventListener('DOMContentLoaded', activateVisibleCards);



   // Fonction pour activer les compétences visibles dans la vue
   function activateVisibleSkills() {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
      if (isInViewport(skill)) {
        skill.classList.add('active');
      }
    });
  }

  // Événement de défilement pour activer les compétences au fur et à mesure du défilement
  window.addEventListener('scroll', activateVisibleSkills);

  // Activation initiale des compétences lors du chargement de la page
  document.addEventListener('DOMContentLoaded', activateVisibleSkills);