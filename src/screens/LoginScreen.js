import Greetings from '../components/loginscreen/Greetings';
import Header from '../components/loginscreen/Header';
import SocialLogin from '../components/loginscreen/SocialLogin';
import Divider from '../components/loginscreen/Divider';
import LoginFields from '../components/loginscreen/LoginFields';
import Captcha from '../components/loginscreen/Captcha';
import IconButton from '../components/loginscreen/IconButton';
import RecoverPassword from '../components/loginscreen/RecoverPassword';

function LoginScreen() {
  return (
    <div className="flex flex-row justify-center p-12 font-inter">
      <div className="Login">
        <Header />
        <Greetings />
        <SocialLogin />
        <Divider />
        <LoginFields />
        <Captcha />
        <IconButton />
        <RecoverPassword />
      </div>
    </div>
  );
}

export default LoginScreen;
