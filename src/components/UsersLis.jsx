import React from 'react'
import UserCard from './UserCard'

const UsersLis = ({users, deleteUser, handleClickEdit}) => {
  return (
    <section className='grid gap-10 my-8 auto-rows-auto grid-cols-[repeat(auto-fill,_300px)] justify-center mx-auto'>
        {
            users.map((user) => <UserCard  key={user.id} user={user} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />)
        }
    </section>
  )
}

export default UsersLis