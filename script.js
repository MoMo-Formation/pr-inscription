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

    // Construire le lien WhatsApp avec les réponses appropriées
    var whatsappLink = 'https://wa.me/22601368949?text=*Session%20choisie*%3A%20' + encodeURIComponent(session) +
                       '%0A*Prix%20choisi*%3A%20' + encodeURIComponent(price) +
                       '%0A*Mode%20de%20paiement*%3A%20' + encodeURIComponent(payment) +
                       '%0A*Num%C3%A9ro%20de%20paiement*%3A%20' + encodeURIComponent(paymentNumber);

    // Ouvrir le lien WhatsApp dans une nouvelle fenêtre
    window.open(whatsappLink);
  });
});
