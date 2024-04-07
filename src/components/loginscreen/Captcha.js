import React from 'react';
import HCaptcha from 'react-hcaptcha';

function Captcha() {
  const handleHcaptchaVerify = (token) => {
    console.log('hCaptcha token:', token);
    // You can handle the token here, such as sending it to your server for verification
  };

  return (
    <div className="p-6 flex justify-center">
      {/* Add your form fields here */}
      <HCaptcha
        id="capctha"
        sitekey="3ddcf806-7516-4a81-aac1-61447a4be6ff"
        onVerify={handleHcaptchaVerify}
      />
    </div>
  );
}

export default Captcha;
