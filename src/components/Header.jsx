import React from 'react'

const Header = ({setIsShowForm}) => {
  const handeClickShowModal = () => {
    setIsShowForm((isShowForm)=> !isShowForm)
  }
  
  
    return (
    <header className="flex items-center justify-between bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white p-4">
        <h1 className="text-xl font-bold">Usuarios</h1>
        <button onClick={handeClickShowModal} className="bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-50 transition-colors text-sm">
          <i className="bx bx-plus"></i> Crear un nuevo Usuario
        </button>
    </header>
  )
}

export default Header