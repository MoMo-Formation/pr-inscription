// Fonction pour envoyer le message WhatsApp
function sendWhatsAppMessage() {
  // Récupérer les valeurs de tous les champs du formulaire
  let session = document.getElementById('session').value;
  let price = document.querySelector('input[name="price"]:checked').value;
  let payment = document.getElementById('payment').value;
  let paymentAddress = document.getElementById('payment_address').value;
  let nom = document.getElementById('nom').value;
  let prenom = document.getElementById('prenom').value;
  let whatsapp = document.getElementById('whatsapp').value;

  // Construire le message WhatsApp en concaténant toutes les réponses
  let whatsappMessage = '*Préinscription* :\n\n' +
                        '*Nom* : ' + nom +
                        '\n*Prénom* : ' + prenom +
                        '\n*Numéro WhatsApp* : ' + whatsapp +
                        '\n\n*Session choisie* :\n' + session +
                        '\n\n*Prix choisi* :\n' + price +
                        '\n\n*Mode de paiement* :\n' + payment +
                        '\n\n*Adresse du moyen de paiement* :\n' + paymentAddress;

  // Créer le lien WhatsApp avec le message pré-rempli
  let whatsappLink = 'https://wa.me/message/DJNWKADUL744A1?text=' + encodeURIComponent(whatsappMessage);

  // Ouvrir une nouvelle fenêtre pour envoyer le message WhatsApp
  window.open(whatsappLink);
}
