import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// import { UserContext } from '../contexts/user.context';

import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // grab the setter from the context
  // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    // const { user } = await signInWithGooglePopup();
    await signInWithGooglePopup();
    // setCurrentUser(user);
    // await createUserDocFromAuth(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );
      resetFormFields();
      // set new signed in user in the context
      // setCurrentUser(user);
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password': 
          alert('Incorrect password!');
          break;
        case 'auth/user-not-found':
          alert('No such user!');
          break;
        default:
          console.error(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Got an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className="buttons-container">

          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;