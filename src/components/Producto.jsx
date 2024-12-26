
import { formatearDinero } from "../helpers"
import useKiosko from "../hooks/useKioso"

export default function Producto({producto}) {
    const {nombre, imagen, precio} = producto

    const { handleClickModal, handleSetProducto} = useKiosko();

    return (
    <div className="border p-3 shadow bg-white">
        <img 
            src={`/img/${imagen}.jpg`} 
            alt={`image ${imagen}`}
            className="w-full"
        />

        <div className="p-5">
            <h3 className="text-xl font-bold">{nombre}</h3>
            <p className="mt-5 font-bold text-4xl text-amber-500">
                { formatearDinero(precio)}
            </p>
            <button 
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-2 uppercase font-bold"
                onClick={ () => {
                    handleClickModal();
                    handleSetProducto(producto)
                }}
            >
                Agregar
            </button>
        </div>
    </div>
  )
}
