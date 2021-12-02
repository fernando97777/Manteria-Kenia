import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoClientes from "./components/ListadoClientes"


function App() {
  //este componente tiene todos los datos guardados
  const [clientes, setClientes] = useState([])

  //este componente sirve para actualizar

  const [cliente, setCliente] = useState({})

  //localStogare
  useEffect(() => {
    const obtenerLs = () => {
      const clientesLs = JSON.parse(localStorage.getItem('clientes')) ?? [];
      setClientes(clientesLs)
    }
    obtenerLs();
  }, [])

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes])

  //funciones
  const eliminarCliente = (id) => {
    const clientesActualizados = clientes.filter(cliente => cliente.id !== id)
    setClientes(clientesActualizados)
  }


  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="md:flex mt-12">
        <Formulario
          setClientes={setClientes}
          clientes={clientes}
          cliente={cliente}
          setCliente={setCliente}

        />
        <ListadoClientes
          clientes={clientes}
          setCliente={setCliente}
          eliminarCliente={eliminarCliente}
        />
      </div>

    </div>
  )
}

export default App
