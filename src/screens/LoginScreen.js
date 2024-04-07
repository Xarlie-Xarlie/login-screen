import Greetings from '../components/loginscreen/Greetings';
import Header from '../components/loginscreen/Header';
import SocialLogin from '../components/loginscreen/SocialLogin';
import Divider from '../components/loginscreen/Divider';
import LoginFields from '../components/loginscreen/LoginFields';
import Captcha from '../components/loginscreen/Captcha';
import IconButton from '../components/loginscreen/IconButton';
import RecoverPassword from '../components/loginscreen/RecoverPassword';
import DarkToggle from '../components/loginscreen/DarkToggle';

function LoginScreen() {
  return (
    <div className="flex flex-row justify-center p-12 font-inter dark:bg-dark dark:text-white">
      <div className="Login">
        <DarkToggle />
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
