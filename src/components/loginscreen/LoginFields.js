import Input from "./Input";
import search from "../../../src/svg/search.svg";
import lock from "../../../src/svg/lock.svg";
import closed_eye from "../../../src/svg/closed_eye.svg";
import eye from "../../../src/svg/eye.svg";

function LoginFields() {
  const loginElements = [
    {
      title: "Usuário",
      icon1: search,
      icon2: null,
      icon3: null,
      placeholder: "aluno200_1u",
      type: "text"
    },
    {
      title: "Senha",
      icon1: lock,
      icon2: closed_eye,
      icon3: eye,
      placeholder: "********",
      type: "password"
    }
  ];

  return (
    <div className="flex flex-col p-6 gap-4">
      {loginElements.map((loginField, index) =>
        <Input
          key={index}
          title={loginField.title}
          icon1={loginField.icon1}
          icon2={loginField.icon2}
          icon3={loginField.icon3}
          type={loginField.type}
          placeholder={loginField.placeholder}
          hidden={loginField.hidden}
        />
      )}
      <div className="flex font-normal text-sm">
        <input
          type="checkbox"
          className="
          Keep-connected
          mr-3
          w-5
          checked:ring-sky-400
          h-5
          rounded-sm
          border-2
          "
        />
        Manter conectado
      </div>
    </div>
  );
}

export default LoginFields;
