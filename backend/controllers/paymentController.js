const { Client, Environment, ApiError } = require('square');

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const accessToken =
  'EAAAEMURSYYLvL1ix5rHmCupWXStoGRVVrjXC_uVzQYyRakYXxsvc29fnVH8KK_S';

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: accessToken,
});

exports.processPayment = catchAsyncErrors(async (req, res) => {
  const requestParams = req.body;

  // Charge the customer's card
  const paymentsApi = client.paymentsApi;

  const requestBody = {
    sourceId: requestParams.nonce,
    amountMoney: {
      amount: requestParams.amountt * 100, // $1.00 charge
      currency: 'USD',
    },
    locationId: requestParams.location_id,
    idempotencyKey: requestParams.idempotency_key,
  };

  try {
    const response = await paymentsApi.createPayment(requestBody);
    console.log(response.result.payment.id);

    res.status(200).json({
      title: 'Payment Successful',
      result: response.result.payment.status,
      id: response.result.payment.id,
    });
  } catch (error) {
    let errorResult = null;
    if (error instanceof ApiError) {
      errorResult = error.errors;
    } else {
      errorResult = error;
    }
    res.status(500).json({
      title: 'Payment Failure',
      result: errorResult,
    });
  }
});
