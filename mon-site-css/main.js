let bouton = document.querySelector("#DarkMode");
bouton.addEventListener("click", function() {
     document.body.classList.toggle("DarkMode");
})

function openTab(event, tabId) {
     // Masquer tous les contenus
     const contents = document.querySelectorAll('.tab-content');
     contents.forEach(content => content.classList.remove('active'));
   
     // Désactiver tous les onglets
     const tabs = document.querySelectorAll('.tab');
     tabs.forEach(tab => tab.classList.remove('active'));
   
     // Afficher le contenu sélectionné
     document.getElementById(tabId).classList.add('active');
   
     // Activer l'onglet sélectionné
     event.currentTarget.classList.add('active');
   }
   // Validation des champs
document.getElementById("formulaire-contact").addEventListener("input", function (e) {
     const input = e.target;
   
     // Validation du champ
     if (input.checkValidity()) {
       input.classList.add("valid");
       input.classList.remove("invalid");
     } else {
       input.classList.add("invalid");
       input.classList.remove("valid");
     }
   });
   
   // Empêcher l'envoi du formulaire si des champs sont invalides
   document.getElementById("formulaire-contact").addEventListener("submit", function (e) {
     const form = e.target;
     const inputs = form.querySelectorAll("input");
   
     let allValid = true;
   
     // Vérifie chaque champ
     inputs.forEach(input => {
       if (!input.checkValidity()) {
         input.classList.add("invalid");
         input.classList.remove("valid");
         allValid = false;
       }
     });
   
     // Annule l'envoi si des champs sont invalides
     if (!allValid) {
       e.preventDefault();
       alert("Veuillez corriger les champs en rouge avant de soumettre le formulaire.");
     }
   });