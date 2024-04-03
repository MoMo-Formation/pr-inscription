document.addEventListener('DOMContentLoaded', function() {
  var whatsappBtn = document.getElementById('submit-btn');
  whatsappBtn.addEventListener('click', function() {
    var session = document.getElementById('session').value;
    var price = document.querySelector('input[name="price"]:checked').value;
    var payment = document.getElementById('payment').value;
    var paymentNumber = document.getElementById('payment_number').value;
    var paymentAddress = document.getElementById('payment_address').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var whatsapp = document.getElementById('whatsapp').value;

    var paymentAddressText;

    // Déterminer l'adresse du moyen de paiement en fonction du choix
    switch (payment) {
      case 'orange_money':
        paymentAddressText = '+22657547436 (Orange Burkina)';
        break;
      case 'wave':
        paymentAddressText = '+22657547436';
        break;
      case 'moov_money':
        paymentAddressText = '+22601368949 (Moise Compaoré)';
        break;
      case 'mtn':
        paymentAddressText = '+22657547436 (Orange Burkina)';
        break;
      case 'nita':
        paymentAddressText = 'Burkina Faso, Bobo-Dioulasso, à Moïse Compaoré';
        break;
      default:
        paymentAddressText = 'Adresse de paiement par défaut';
        break;
    }

    var whatsappMessage = '*Préinscription* :\\n\\n' +
                          '*Nom* : ' + nom +
                          '\\n*Prénom* : ' + prenom +
                          '\\n*Numéro WhatsApp* : ' + whatsapp +
                          '\\n\\n*Session choisie* :\\n' + session +
                          '\\n\\n*Prix choisi* :\\n' + price +
                          '\\n\\n*Mode de paiement* :\\n' + payment +
                          '\\n\\n*Numéro de paiement* :\\n' + paymentNumber +
                          '\\n\\n*Adresse du moyen de paiement* :\\n' + paymentAddressText;

    var whatsappLink = '1' + encodeURIComponent(whatsappMessage);
    window.open(whatsappLink);
  });
});
