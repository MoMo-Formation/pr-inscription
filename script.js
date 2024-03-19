document.getElementById('preinscription-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let session = document.getElementById('session').value;
  let price = document.querySelector('input[name="price"]:checked').value;
  let payment = document.getElementById('payment').value;
  let paymentAddress = document.getElementById('payment_address').value;
  let paymentNumber = document.getElementById('payment_number').value;
  let message = `Préinscription à la session : ${session}\nChoix du prix : ${price}\nMoyen de paiement : ${payment}\nAdresse du moyen de paiement : ${paymentAddress}\nNuméro de téléphone pour le paiement : ${paymentNumber}`;

  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = `https://wa.me/22601368949?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
});

// Affichage de l'adresse du moyen de paiement en fonction du choix du moyen de paiement
document.getElementById('payment').addEventListener('change', function() {
  let paymentAddress = document.getElementById('payment_address');
  let payment = document.getElementById('payment').value;
  let addressText = '';

  switch (payment) {
    case 'orange_money':
      addressText = '+22657547436 (Wend Lassida Ismael Moise Compaore)';
      break;
    case 'wave':
      addressText = '+22657547436';
      break;
    case 'moov_money':
      addressText = '+22601368949';
      break;
    case 'nita':
      addressText = 'Burkina Faso, Bobo-Dioulasso à Moïse Compaoré au +22657547436';
      break;
    case 'express_point':
      addressText = 'Compaoré Moïse, +22657547436';
      break;
    default:
      addressText = '';
  }

  paymentAddress.value = addressText;
});
