import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    // console.log(res.data.status);
    if (res.data.status === 'success') {
      showAlert('success', 'Successfully logged out!');
      location.reload(true); //to prompt a reload from the server side
    }
  } catch (err) {
    showAlert('error', 'Error logging out. Please try again!');
  }
};
