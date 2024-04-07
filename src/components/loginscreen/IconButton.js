import sign from "../../../src/svg/plus.svg";

function IconButton() {
  return (
    <div className="p-6">
      <button
        className="
        bg-primary-blue
        flex
        justify-center
        gap-4
        h-12
        w-full
        rounded-lg
        font-medium 
        text-lg
        text-white
        hover:bg-sky-400
        "
      >
        <img className="my-3.5" src={sign} alt={sign} />
        <p className="my-2">Entrar</p>
      </button>
    </div>
  );
}

export default IconButton;
