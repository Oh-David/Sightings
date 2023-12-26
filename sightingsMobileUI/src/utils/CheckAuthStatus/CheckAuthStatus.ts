// CheckAuthStatus.ts
import { Auth } from 'aws-amplify';
import { ProfileScreenNavigationProp } from './../../models/navigationTypes'; 

const CheckAuthStatus = async (navigation: ProfileScreenNavigationProp): Promise<boolean> => {
  try {
    await Auth.currentAuthenticatedUser();
    // User is authenticated
    return true;
  } catch (error) {
    console.error('Error checking auth status:', error);
    return false;
  }
};

export default CheckAuthStatus;
