import React from 'react'

const MensajeError = ({mensajeError}) => {
    return (
        <div className="bg-red-600 text-white text-center font-bold rounded-md p-2 text-xl mb-5 uppercase">
            <p>{mensajeError}</p>
        </div>
    )
}

export default MensajeError
