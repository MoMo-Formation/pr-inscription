document.addEventListener('DOMContentLoaded', function() {
  // Identifier le bouton WhatsApp
  var whatsappBtn = document.getElementById('submit-btn');

  // Ajouter un écouteur d'événements au clic sur le bouton
  whatsappBtn.addEventListener('click', function() {
    // Récupérer les valeurs des champs de formulaire
    var session = document.getElementById('session').value;
    var price = document.querySelector('input[name="price"]:checked').value;
    var payment = document.getElementById('payment').value;
    var paymentNumber = document.getElementById('payment_number').value;
    var paymentAddress = document.getElementById('payment_address').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var whatsapp = document.getElementById('whatsapp').value;

    // Construire le message WhatsApp avec toutes les réponses et l'adresse du moyen de paiement
    var whatsappMessage = '*Préinscription* :\n\n' +
                          '*Nom* : ' + nom +
                          '\n*Prénom* : ' + prenom +
                          '\n*Numéro WhatsApp* : ' + whatsapp +
                          '\n\n*Session choisie* :\n' + session +
                          '\n\n*Prix choisi* :\n' + price +
                          '\n\n*Mode de paiement* :\n' + payment +
                          '\n\n*Numéro de paiement* :\n' + paymentNumber +
                          '\n\n*Adresse du moyen de paiement* :\n' + paymentAddress;

    // Construire le lien WhatsApp avec le message
    var whatsappLink = 'https://wa.me/22601368949?text=' + encodeURIComponent(whatsappMessage);

    // Ouvrir le lien WhatsApp dans une nouvelle fenêtre
    window.open(whatsappLink);
  });
});
