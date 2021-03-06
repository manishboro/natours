import axios from 'axios';
import { showAlert } from './alerts';
let stripe = Stripe('pk_test_LdX6Vepk9OUMfGd5dX4BlA3C00JLVPYYo5');

export const bookTour = async tourId => {
  try {
    //1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`); //by default it is a get request
    // console.log(session);

    //2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
