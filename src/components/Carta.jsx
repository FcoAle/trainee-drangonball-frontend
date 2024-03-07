import "../css/targetas.css"



const AstroCard = ({ ID, NOMBRE, IMAGEN, DESCRIPCION, RAZA}) => {
  return (
    <article
      id={NOMBRE}
      className="relative flex flex-col justify-end overflow-hidden rounded-xl px-28 pb-[12rem] pt-[5rem] mt-12 tarjeta carta"
    >
      <a href={`/info-per/${ID}`}>
        <img
          className="absolute inset-0 h-full w-full object-cover imagen"
          src={IMAGEN}
          alt=""
        />
        <div id={RAZA} className="z-1 flex flex-col items-center informacion">
          <h3 className="text-4xl font-bold text-nowrap text-white">{NOMBRE}</h3>
          <span className="text-white text-lg text-center">{DESCRIPCION}</span>
        </div>
      </a>
    </article>
  );
};

export default AstroCard;
