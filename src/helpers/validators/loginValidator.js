/** Define the function for validating the login  */

const validate = (email, password) => {
  if (!email) {
    return { message: 'Please provide an email' };
  }
  if (!password) {
    return { message: 'Please provide password' };
  }
  if (email.trim().length === 0) {
    return { message: 'Email can not be empty' };
  }
  if (password.trim().length === 0) {
    return { message: 'Password can not be empty' };
  }
  if (!/.+@.+\..+/.test(email)) {
    return { message: 'Invalid email format!' };
  }
};

export default validate;
