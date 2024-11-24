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
// Validation des champs avec des règles spécifiques
let password2 = document.querySelector("#password2")
let passCheck = new RegExp("^(?=.[a-z]) (?=.[A-Z])(?=.\d)(?=.[-+_!@#$%^&*., ?]).+$");
document.getElementById("formulaire-contact").addEventListener("input", function (e) {
  
  const input = e.target;

  // Validation pour le nom (minimum 6 caractères)
  if (input.id === "name") {
    if (input.value.length >= 6) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  }
   // Validation pour le champ email
   if (input.id === "email") {
    // Vérifie si l'email est valide en utilisant la méthode checkValidity()
    if (input.checkValidity()) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
    if (email.value == ''){
      console.log("invalide")
    }else{
      console.log('valide')
    }

  }
  // Validation  pour le mot de passe
  if (input.id === "password") {

    if (passCheck.test(input.value)) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  }

  // Validation pour la confirmation du mot de passe
  if (input.id === "confirm-password") {
    const password = document.getElementById("password").value;
    if (input.value === password) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  }
});
// Empêcher l'envoi du formulaire si des champs sont invalides
document.getElementById("formulaire-contact").addEventListener("submit", function (e) {
  const form = e.target;
  const inputs = form.querySelectorAll("input");
  let allValid = true;

  // Vérifie chaque champ
  inputs.forEach(input => {
    if (!input.classList.contains("valid")) {
      input.classList.add("invalid");
      input.classList.remove("valid");
      allValid = false;
    }
  });

  // Annule l'envoi si des champs sont invalides
  if (!allValid) {
    e.preventDefault();
    
  }
});







