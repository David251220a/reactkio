import useKiosko from "../hooks/useKioso"

export default function Categoria({categoria}) {
  const { handleClickCategoria, categoriaActual } = useKiosko();
  const {icono, id, nombre} = categoria
  
  return (
    <div onClick={ () => handleClickCategoria(id)}
      className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        <img 
          alt="imagen icono" 
          src={`/img/icono_${icono}.svg`}
          className="w-12"
        />
        <button className="text-lg font-bold cursor-pointer truncate"
          type="button"
          // onClick={ () => handleClickCategoria(id)}
        >
          {nombre}
        </button>
    </div>
  )
}
