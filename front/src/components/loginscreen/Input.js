import React, { useState } from "react";

function Input({ title, icon1, icon2, icon3, placeholder, type, setValue, login }) {
  const [showPassword, changePasswordView] = useState(false);
  const [value, setValueLocally] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue); // Pass the value to the parent component
    setValueLocally(newValue); // Update local state
  };

  return (
    <div>
      <label>{title}</label>
      <div
        className={
          `${login === "failed" ? "border-red-500" : "border-login"}
          flex rounded-lg my-2 p-4 border gap-4 hover:border-primary-blue`
        }
      >
        <img className="flex-none" src={icon1} alt={"icon login"} />
        <input
          className="grow outline-0 bg-transparent text-dark-text"
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          value={value}
          onChange={handleChange}
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
