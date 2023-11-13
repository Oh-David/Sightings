import React from 'react';
import { render } from '@testing-library/react-native';
import SignInScreen from '../../src/screens/SignInScreen/SignInScreen';

describe('SignInScreen', () => {
  it('renders the username and password input fields and a submit button', () => {
    const { getByPlaceholderText, getByText } = render(<SignInScreen />);

    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();
  });

  // Additional tests can be added here
});
