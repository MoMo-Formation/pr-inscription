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

  // Affichage de la notification spécifique au moyen de paiement
  let paymentNotification = document.getElementById('payment-notification');
  if (payment === 'orange_money' || payment === 'wave') {
    if (paymentNotification) {
      paymentNotification.innerHTML = '<strong><em>Le paiement se fait sur le +22657547436</em></strong>';
    }
  } else if (payment === 'nita') {
    if (paymentNotification) {
      paymentNotification.innerHTML = '<strong><em>Le paiement se fait au Burkina Faso, dans la ville de Bobo-Dioulasso, au nom de Compaoré Moïse sur le +22657547436</em></strong>';
    }
  } else if (payment === 'moov_money') {
    if (paymentNotification) {
      paymentNotification.innerHTML = '<strong><em>Le paiement se fait sur le +22601368949</em></strong>';
    }
  } else if (payment === 'express_point') {
    if (paymentNotification) {
      paymentNotification.innerHTML = '<strong><em>Le paiement se fait au nom de Compaoré Moïse (veuillez m\'envoyer le code de retrait sur WhatsApp)</em></strong>';
    }
  }
});
