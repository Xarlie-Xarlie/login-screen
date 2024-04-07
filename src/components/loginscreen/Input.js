import React, { useState } from "react";

function Input({ title, icon1, icon2, icon3, placeholder, type }) {
  const [showPassword, changePasswordView] = useState(false);

  return (
    <div>
      {title}
      <div className="Login-border flex rounded-lg my-2 p-4 border gap-4 hover:border-primary-blue">
        <img className="flex-none" src={icon1} alt={"icon login"} />
        <input
          className="grow outline-0 bg-transparent text-dark-text"
          placeholder={placeholder}
          type={showPassword ? "text" : type}
        />
        {icon2 &&
          <img
            className="flex-none cursor-pointer"
            src={showPassword ? icon3 : icon2}
            alt={"icon login"}
            onClick={() => { changePasswordView(!showPassword) }}
          />
        }
      </div>
    </div>
  );
}

export default Input;
