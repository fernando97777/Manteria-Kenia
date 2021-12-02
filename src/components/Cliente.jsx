import React from 'react'

const cliente = ({ clientes, setCliente, eliminarCliente }) => {
    const { nombre, direccion, numero, alquiler, entrega, area, total, id } = clientes

    //funciones
    const eliminar = () => {
        const respuesta = confirm("¿Desea Eliminar el Cliente?")
        if (respuesta) {
            eliminarCliente(id)
        }
    }

    return (
        <div className="ml-5 px-5 py-10 bg-white rounded-lg shadow-md mb-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Direccion: {""}
                <span className="font-normal normal-case">{direccion}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Numero de telefono: {""}
                <span className="font-normal normal-case">{numero}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alquiler: {""}
                <span className="font-normal normal-case">{alquiler}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de entrega: {""}
                <span className="font-normal normal-case">{entrega}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">¿que se alquilo? {""}
                <span className="font-normal normal-case">{area}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Total: {""}
                <span className="font-bold normal-case text-indigo-700">{total}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="bg-indigo-600 text-white py-2 px-10 rounded-md uppercase font-bold hover:bg-indigo-700"
                    onClick={() => setCliente(clientes)}
                >Editar</button>

                <button
                    type="button"
                    className="bg-red-600 text-white py-2 px-10 rounded-md uppercase font-bold hover:bg-indigo-700"
                    onClick={eliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default cliente
