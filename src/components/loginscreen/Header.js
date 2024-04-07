import logo from '../../../src/svg/logo.svg';
import '../../screens/LoginScreen.css';

function Header() {
  return (
    <div className="flex justify-between p-6">
      <img src={logo} alt="logo" className="w-32" />
      <button className="text-primary-blue hover:text-sky-400">Criar conta</button>
    </div>
  );
}

export default Header;
