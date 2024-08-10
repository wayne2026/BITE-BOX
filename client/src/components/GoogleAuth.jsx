
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
export default function GoogleAuth() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    console.log("Google Client ID:", clientId)
    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
        // You can send the response token to your server for further processing
    };

    const handleLoginFailure = (response) => {
        console.log('Login Failed:', response);
    };

  
    return (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin success={handleLoginSuccess} failure={handleLoginFailure}
          />
        </GoogleOAuthProvider>
      );
    }
    

