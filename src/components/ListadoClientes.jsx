import React from 'react'
import Cliente from './Cliente'

const ListadoClientes = ({ clientes,setCliente,eliminarCliente }) => {


    return (
        <div className="md:w-1/2 lg:w-3/5">
            {clientes && clientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Clientes</h2>
                    <p
                        className="text-center text-lg mt-5 mb-5">Administra tus {""}
                        <span className="text-indigo-600 font-bold">Clientes</span>
                    </p>

                    <div className=" md:h-screen overflow-y-scroll">

                        {
                            clientes.map(cliens => (
                                <Cliente
                                    key={cliens.id}
                                    clientes={cliens}
                                    setCliente={setCliente}
                                    eliminarCliente={eliminarCliente}
                                />
                            ))}

                    </div>
                </>

            ) : (
                <>

                    <h2 className="font-black text-3xl text-center">No Hay Clientes</h2>
                    <p
                        className="text-center text-lg mt-5 mb-5">Comienza Agreagando Clientes {""}
                        <span className="text-indigo-600 font-bold">y Aparecerán en este Lugar</span>
                    </p>


                </>
            )}


        </div>
    )
}

export default ListadoClientes
