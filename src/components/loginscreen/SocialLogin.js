import SocialButton from "./SocialButton";

import toolzz from "../../../src/svg/toolzz.svg";
import facebook from "../../../src/svg/facebook.svg";
import apple from "../../../src/svg/apple.svg";
import twitter from "../../../src/svg/twitter.svg";

import hoverToolzz from "../../../src/svg/hover/toolzz.svg";
import hoverFacebook from "../../../src/svg/hover/facebook.svg";
import hoverApple from "../../../src/svg/hover/apple.svg";
import hoverTwitter from "../../../src/svg/hover/twitter.svg";

function SocialLogin() {
  const socialLogos = [toolzz, facebook, apple, twitter];
  const socialHoverLogos = [hoverToolzz, hoverFacebook, hoverApple, hoverTwitter];

  return (
    <div className="flex justify-evenly p-6 gap-4 rounded-lg">
      {socialLogos.map((_logo, index) => (
        <SocialButton key={index} logo={socialLogos[index]} hoverLogo={socialHoverLogos[index]} />
      ))
      }
    </div >
  );
}

export default SocialLogin;
