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

  // Affichage de la notification
  let notification = document.getElementById('notification');
  if (payment === 'orange_money' || payment === 'wave') {
    notification.innerHTML = '<p class="notification"><strong><em>Le paiement se fait sur le +22657547436</em></strong></p>';
  } else if (payment === 'nita') {
    notification.innerHTML = '<p class="notification"><strong><em>Le paiement se fait au Burkina Faso, dans la ville de Bobo-Dioulasso, au nom de Compaoré Moïse sur le +22657547436</em></strong></p>';
  } else if (payment === 'moov_money') {
    notification.innerHTML = '<p class="notification"><strong><em>Le paiement se fait sur le +22601368949</em></strong></p>';
  } else if (payment === 'express_point') {
    notification.innerHTML = '<p class="notification"><strong><em>Le paiement se fait au nom de Compaoré Moïse (veuillez m\'envoyer le code de retrait sur WhatsApp)</em></strong></p>';
  }

  // Ajout de la notification sur la capture d'écran
  let notificationScreenshot = '<p class="notification"><strong><em>Une capture d\'écran de la confirmation du paiement est nécessaire pour valider l\'inscription.</em></strong></p>';
  notification.insertAdjacentHTML('beforeend', notificationScreenshot);
});
