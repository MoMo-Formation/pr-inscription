document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour charger l'adresse du moyen de paiement par défaut
  function loadDefaultPaymentAddress() {
    let initialPayment = document.getElementById('payment').value;
    let initialAddress = getPaymentAddress(initialPayment);
    document.getElementById('payment_address').value = initialAddress;
  }

  // Fonction pour obtenir l'adresse du moyen de paiement en fonction du choix
  function getPaymentAddress(paymentMethod) {
    switch (paymentMethod) {
      case 'orange_money':
        return '+22657547436 (Wend Lassida Ismael Moise Compaore)';
      case 'wave':
        return '+22657547436';
      case 'moov_money':
        return '+22601368949';
      case 'nita':
        return 'Burkina Faso, Bobo-Dioulasso à Moïse Compaoré au +22657547436';
      case 'express_point':
        return 'Compaoré Moïse, +22657547436';
      default:
        return '';
    }
  }

  // Charger l'adresse du moyen de paiement par défaut lors du chargement de la page
  loadDefaultPaymentAddress();
});
