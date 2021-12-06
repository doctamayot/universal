function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const idempotency_key = uuidv4();
const config = {
  // Initialize the payment form elements

  //TODO: Replace with your sandbox application ID
  applicationId: 'sandbox-sq0idb-Z_56WN7--t3Sm-NceqDWzg',
  inputClass: 'sq-input',
  autoBuild: false,
  // Customize the CSS for SqPaymentForm iframe elements
  inputStyles: [
    {
      fontSize: '16px',
      lineHeight: '24px',
      padding: '16px',
      placeholderColor: '#a0a0a0',
      backgroundColor: 'transparent',
    },
  ],
  // Initialize the credit card placeholders
  cardNumber: {
    elementId: 'sq-card-number',
    placeholder: 'Card Number',
  },
  cvv: {
    elementId: 'sq-cvv',
    placeholder: 'CVV',
  },
  expirationDate: {
    elementId: 'sq-expiration-date',
    placeholder: 'MM/YY',
  },
  postalCode: {
    elementId: 'sq-postal-code',
    placeholder: 'Postal',
  },
  // SqPaymentForm callback functions
  callbacks: {
    /*
     * callback function: cardNonceResponseReceived
     * Triggered when: SqPaymentForm completes a card nonce request
     */
    cardNonceResponseReceived: function (errors, nonce, cardData) {
      if (errors) {
        // Log errors from nonce generation to the browser developer console.
        console.error('Encountered errors:');
        errors.forEach(function (error) {
          console.error('  ' + error.message);
        });
        alert(
          'Encountered errors, check browser developer console for more details'
        );
        return;
      }
      //TODO: Replace alert with code in step 2.1
      fetch('http://localhost:4000/api/v1/process-payment', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nonce: nonce,
          idempotency_key: idempotency_key,
          location_id: 'LR44H273Z2TP4',
        }),
      })
        .catch((err) => {
          alert('Network error: ' + err);
        })
        .then((response) => {
          if (!response.ok) {
            return response
              .json()
              .then((errorInfo) => Promise.reject(errorInfo));
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          alert(
            'Payment complete successfully!\nCheck browser developer console for more details'
          );
        })
        .catch((err) => {
          console.error(err);
          alert(
            'Payment failed to complete!\nCheck browser developer console for more details'
          );
        });
    },
  },
};

export default config;
