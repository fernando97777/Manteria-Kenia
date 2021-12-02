import React, { useEffect, useState } from 'react'
import MensajeError from './MensajeError'

const formulario = ({setClientes,clientes,cliente,setCliente}) => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numero, setNumero] = useState("")
    const [alquiler, setAlquiler] = useState("")
    const [entrega, setEntrega] =useState("")
    const [area, setArea] = useState("")
    const [total, setTotal] = useState("")
    const [error, setError] = useState(false)

    //use useEfect para verficar el cambio de estado de un componente
    useEffect(() => {
        if(Object.keys(cliente).length > 0){
            setNombre(cliente.nombre),
            setDireccion(cliente.direccion)
            setNumero(cliente.numero)
            setAlquiler(cliente.alquiler)
            setEntrega(clientes.entrega)
            setArea(cliente.area)
            setTotal(cliente.total)
        }
    }, [cliente])
    //funciones 
    const generarId = () =>{
        const random = Math.random().toString(36).substr(2); 
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    const enviar = (e) =>{
        e.preventDefault()
        
        //validacion formulario
        if ([nombre,direccion,numero,alquiler,entrega,area,total].includes("")) {
            setError(true)
            return;
        }
            setError(false)

        //creacion de objeto de clientes
        const objetoClientes = {
            nombre,
            direccion,
            numero,
            alquiler,
            entrega,
            area,
            total,
            id: generarId()
        }

        //reinscribir datos
        if(cliente.id ){
            objetoClientes.id = cliente.id
            const clientesActualizados = clientes.map(clienteState => clienteState.id 
                === cliente.id ? objetoClientes : clienteState )

                setClientes(clientesActualizados)
                setCliente("")

        }else{
            //guardando en el arreglo de clientes
            objetoClientes.id = generarId();
            setClientes([...clientes, objetoClientes])

        }
        
        //se reinicia el formulario 
        setNombre("")
        setDireccion("")
        setNumero("")
        setAlquiler("")
        setEntrega("")
        setArea("")
        setTotal("")
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl font-bold text-center">Datos del Cliente</h2>
            <p
                className="text-center text-lg mt-5 mb-5">Añade Clientes {""}
                <span className="text-indigo-600 font-bold">y Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mb: m-3"
                onSubmit={enviar}
            >
                {error && <MensajeError mensajeError={"Todos los campos son obligatorios"}/>}
                <div>
                    <label htmlFor="nombres" className="block text-gray-700 uppercase font-bold">Nombres y Apellidos</label>
                    <input
                        id="nombres"
                        type="text"
                        placeholder="Nombres y Apellidos"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold">Direccion del Domicilio</label>
                    <input
                        id="direccion"
                        type="text"
                        placeholder="Direccion"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}

                    />
                </div>
                <div>
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">Numero de Telefono</label>
                    <input              
                        id="telefono"
                        type="number"
                        placeholder="Numero de Celular"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha de Alquiler</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
                        value={alquiler}
                        onChange={(e) => setAlquiler(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fechaEntrega" className="block text-gray-700 uppercase font-bold">Fecha de Entrega</label>
                    <input
                        id="fechaEntrega"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
                        value={entrega}
                        onChange={(e) => setEntrega(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="alquiler" className="block text-gray-700 uppercase font-bold">¿Que se Alquila?</label>
                    <textarea 
                        className="border-2 w-full mt-4 placeholder-gray-400 rounded-md p-2"
                        placeholder="Escriba que va a alquilar."
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="total" className="block text-gray-700 uppercase font-bold">Total a Pagar</label>
                    <input
                        id="total"
                        type="number"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
                        value={total} 
                        onChange={(e) => setTotal(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 text-white mt-5 p-2 w-full font-bold 
                    rounded-md text-lg uppercase hover:bg-indigo-700 cursor-pointer" 
                    value={cliente.id ? 'Guardar Cambios' : 'Agregar Cliente'}
                    
                />
                
            </form>
        </div>
    )
}

export default formulario
