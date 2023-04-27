import React from 'react'

const UserCard = ({user, deleteUser, handleClickEdit}) => {
  return (
      <article className="relative rounded-lg shadow-lg p-4 w-[300px] h-[400px] border-[1px] border-transparent hover:border-primary-color hover:shadow-2xl">
        <div className="bg-blue-300 rounded-full p-2 w-28 h-28 mx-auto mb-4">
          <img className='w-full h-full object-cover rounded-full' src={user.image_url} alt="User Image" />
        </div>
        <h3 className="text-lg font-bold my-2 text-center text-gray-800">{user.first_name} {user.last_name}</h3>
        <ul className="text-gray-800">
          <li className="bg-green-300 rounded-md p-2 mb-2">
            <h4 className="text-sm mb-1">Correo</h4>
            <span>{user.email}</span>
          </li>
          <li className="bg-yellow-300 rounded-md p-2 mb-2">
            <h4 className="text-sm mb-1">Cumpleaños</h4>
            <span>
              <i className='bx bx-gift'></i>
              {user.birthday}
            </span>
          </li>
        </ul>
        <div className="flex justify-center mt-auto">
          <button onClick={() => handleClickEdit(user)} className="bg-red-500 text-white rounded-md px-4 py-2 mr-2 w-32 hover:bg-white hover:text-red-500 hover:shadow-md hover:shadow-red-500">
            Editar
          </button>
          <button onClick={() => deleteUser(user.id)} className="bg-gray-800 text-white rounded-md px-4 py-2 w-32 hover:bg-white hover:text-gray-800 hover:shadow-md hover:shadow-gray-800">
            Eliminar
          </button>
        </div>
      </article>
  )
}

export default UserCard