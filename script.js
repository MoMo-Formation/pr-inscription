// Fonction pour envoyer le message WhatsApp
function sendWhatsAppMessage() {
  // Récupérer les valeurs de tous les champs du formulaire
  var session = document.getElementById('session').value;
  var price = document.querySelector('input[name="price"]:checked').value;
  var payment = document.getElementById('payment').value;
  var paymentAddress = document.getElementById('payment_address').value;
  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;
  var whatsapp = document.getElementById('whatsapp').value;

  // Construire le message WhatsApp en concaténant toutes les réponses
  var whatsappMessage = '*Préinscription* :\n\n' +
                        '*Nom* : ' + nom +
                        '\n*Prénom* : ' + prenom +
                        '\n*Numéro WhatsApp* : ' + whatsapp +
                        '\n\n*Session choisie* :\n' + session +
                        '\n\n*Prix choisi* :\n' + price +
                        '\n\n*Mode de paiement* :\n' + payment +
                        '\n\n*Adresse du moyen de paiement* :\n' + paymentAddress;

  // Créer le lien WhatsApp avec le message pré-rempli
  var whatsappLink = 'https://wa.me/message/DJNWKADUL744A1?text=' + encodeURIComponent(whatsappMessage);

  // Ouvrir une nouvelle fenêtre pour envoyer le message WhatsApp
  window.open(whatsappLink);
}
