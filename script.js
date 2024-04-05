document.getElementById('preinscription-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let session = document.getElementById('session').value;
  let price = document.querySelector('input[name="price"]:checked').value;
  let payment = document.getElementById('payment').value;

  // Construction du message avec encadrement par des "*"
  let message = `*Préinscription à la session :*\n${session}\n\n*Prix :*\n${price} FCFA\n\n*Moyen de paiement :*\n${payment}`;

  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = `https://wa.me/22601368949?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
});
