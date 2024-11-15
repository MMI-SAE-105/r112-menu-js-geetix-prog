// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const body = document.body

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true"; 
    const isClosed = !isOpen; 
    console.log("isOpen : ", isOpen, "isClosed : "),
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariaHidden = isOpen;
  toggle.ariaExpanded=isClosed;
  body.classList.toggle("noscroll")
});