function SocialButton({ svg }) {
  return (
    <button
      className="
      hover:border-primary-blue
      flex
      items-center
      w-1
      justify-center
      grow 
      rounded-lg 
      border
      border-social-icon-border
      h-12
      dark:border-white-icon
      dark:hover:border-primary-blue
      dark:fill-white-icon
      dark:hover:fill-primary-blue
      hover:fill-primary-blue
      "
    >
      {svg}
    </button >
  );
}

export default SocialButton;
