import React, { useState, useEffect } from 'react';
import Square from './Square';
import square from './images/square.png';
import CheckoutSteps from './components/cart/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, clearErrors } from './actions/orderActions';

const Prueba = ({ history }) => {
  const [sq, setSq] = useState(false);
  const dispatch = useDispatch();
  const [ok, setOk] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const { error } = useSelector((state) => state.newOrder);

  useEffect(() => {
    let sqPaymentScript = document.createElement('script');
    // sandbox: https://js.squareupsandbox.com/v2/paymentform
    // production: https://js.squareup.com/v2/paymentform
    sqPaymentScript.src = 'https://js.squareupsandbox.com/v2/paymentform';
    sqPaymentScript.type = 'text/javascript';
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      setSq(true);
    };

    document.getElementsByTagName('head')[0].appendChild(sqPaymentScript);
  }, []);

  const squarePayment = sq ? (
    <Square paymentForm={window.SqPaymentForm} ok={ok} setOk={setOk} />
  ) : null;

  if (ok) history.push('/success');

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <img src={square} className="col-md-6" style={{ width: '7%' }} />
        <div className="col-md-8 mt-3">{squarePayment}</div>
      </div>
    </div>
  );
};

export default Prueba;
