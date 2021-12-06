const accountSid = 'ACac74c8a32cbe1f3bb8a5194c09a65f4a';
const authToken = 'cd4bfdaf8abf67f9e5a3b13cd3e8397f';
const od = 'IS8045b6f8e75a4796edb8ceaaa5599e1c';
const twilio = require('twilio')(accountSid, authToken);
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.sendSms = catchAsyncErrors(async (req, res, next) => {
  const { numbers, body } = req.body;

  // const service = twilio.notify.services(od);
  const bindings = numbers.map((number) => {
    return number;
  });
  console.log(bindings);

  const enviar = await twilio.messages
    .create({
      to: '+573144261190,+573143419685',
      body: body,
      from: '3056778471',
    })
    .then((notification) => {
      console.log(notification);
    })
    .catch((err) => {
      console.error(err);
    });

  res.status(200).json({
    enviar,
    success: true,
  });
});
// twilio.messages
//   .create({
//     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//     from: '+3056778471',
//     to: '+573144261190',
//   })
//   .then((message) => console.log(message.sid));
