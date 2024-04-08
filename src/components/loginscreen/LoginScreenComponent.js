import Greetings from './Greetings';
import Header from './Header';
import SocialLogin from './SocialLogin';
import Divider from './Divider';
import LoginFields from './LoginFields';
import Captcha from './Captcha';
import IconButton from './IconButton';
import RecoverPassword from './RecoverPassword';

function LoginScreenComponent() {
  return (
    <div>
      <Header />
      <Greetings />
      <SocialLogin />
      <Divider />
      <LoginFields />
      <Captcha />
      <IconButton />
      <RecoverPassword />
    </div>
  );

}

export default LoginScreenComponent;
