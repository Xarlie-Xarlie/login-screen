import React, { useState } from "react";

function SocialButton({ logo, hoverLogo }) {
  const [svgColor, changeSvgColor] = useState(false);

  return (
    <button
      onMouseEnter={() => { changeSvgColor(true) }}
      onMouseLeave={() => { changeSvgColor(false) }}
      className="SocialIcon hover:border-primary-blue flex items-center w-1 justify-center grow rounded-lg border h-12"
    >
      <img src={svgColor ? hoverLogo : logo} alt="icon" />
    </button >
  );
}

export default SocialButton;
