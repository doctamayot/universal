import React, { useState } from 'react';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, clearErrors } from './actions/orderActions';

const Square = ({ paymentForm, history, setOk }) => {
  const alert = useAlert();
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  const idempotency_key = uuidv4();

  const order = {
    orderItems: cartItems,
    shippingInfo,
  };
  console.log(order);
  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));

  if (orderInfo) {
    order.totalPrice = orderInfo.totalPrice;
    order.itemsPrice = orderInfo.itemsPrice;
  }

  const paymentFor = new paymentForm({
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
          alert.error(
            'Encountered errors, check browser developer console for more details'
          );
          return;
        }
        //TODO: Replace alert with code in step 2.1
        fetch('/api/v1/process-payment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nonce: nonce,
            idempotency_key: idempotency_key,
            location_id: 'LR44H273Z2TP4',
            amountt: order.totalPrice,
          }),
        })
          .catch((err) => {
            alert.error('Network error: ' + err);
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
            alert.success('Payment complete successfully');
            if (data.result === 'COMPLETED') {
              order.paymentInfo = {
                id: data.id,
                status: data.result,
              };

              dispatch(createOrder(order));

              setOk(true);
            } else {
              alert.error('There is some issue while payment processing');
            }
          })

          .catch((err) => {
            console.error(err);
            alert.error(
              'Payment failed to complete!\nCheck browser developer console for more details'
            );
          });
      },
    },
  });

  paymentFor.build();
  const requestCardNonce = () => {
    paymentFor.requestCardNonce();
  };

  return (
    <div id="">
      <div id="sq-card-number"></div>
      <div className="third" id="sq-expiration-date"></div>
      <div className="third" id="sq-cvv"></div>
      <div className="third" id="sq-postal-code"></div>
      <button
        id="sq-creditcard"
        className="button-credit-card"
        onClick={requestCardNonce}
      >
        Pay ${order.totalPrice}
      </button>
    </div>
  );
};

export default Square;
