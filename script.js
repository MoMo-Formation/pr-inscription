document.getElementById('preinscription-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let session = document.getElementById('session').value;
  let price = document.querySelector('input[name="price"]:checked').value;
  let payment = document.getElementById('payment').value;
  let paymentNumber = document.getElementById('payment_number').value;
  let message = `Préinscription à la session : ${session}\nChoix du prix : ${price}\nMoyen de paiement : ${payment}\nNuméro de téléphone pour le paiement : ${paymentNumber}`;

  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = `https://wa.me/22601368949?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
});

// Affichage des informations de paiement en fonction du choix du moyen de paiement
document.getElementById('payment').addEventListener('change', function() {
  let paymentInfo = document.getElementById('payment-info');
  let payment = document.getElementById('payment').value;
  let paymentText = '';

  switch (payment) {
    case 'orange_money':
    case 'wave':
      paymentText = 'Les paiements se font sur :\nOrange Money : +22657547436\nWave : +22657547436';
      break;
    case 'moov_money':
      paymentText = 'Moov Money : +22601368949';
      break;
    case 'nita':
      paymentText = 'Nita : Burkina Faso, Bobo-Dioulasso à Moïse Compaoré au +22657547436';
      break;
    case 'express_point':
      paymentText = 'Point Express (Ecobank) : +22657547436';
      break;
    default:
      paymentText = '';
  }

  paymentInfo.textContent = paymentText;
});
