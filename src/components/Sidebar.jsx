import useKiosko from "../hooks/useKioso"
import Categoria from "./Categoria"

export default function Sidebar() {

    const { categorias } = useKiosko();

  return (
    <aside className="w-72">
        <div className="p-4">
            <img 
                className="w-40"
                src="img/logo.svg" 
                alt="Logo" 
            />

            <div className="mt-10">
                {categorias.map( categoria => (
                    <Categoria 
                        key={categoria.id}
                        categoria ={categoria}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded"
                >
                    Cancelar Orden
                </button>
            </div>

        </div>
    </aside>
  )
}
