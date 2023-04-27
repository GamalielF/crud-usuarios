import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UsersLis from './components/UsersLis'

const DEFAULT_VALUES = {
  first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
        image_url: "",
}

const BASE_URL = "https://users-crud.academlo.tech"

function App() {
  const [users, setUsers] = useState([]);

  const [isUserIdToEdit, setIsUserIdToEdit] = useState();

  const [isShowForm, setIsShowForm] = useState(false)

  const {register, handleSubmit, reset} = useForm();

  const submit = (data) =>{
    if(isUserIdToEdit){
      editUser(data)
    } else {
      createUser(data)
    }
  }

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios.post(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowForm(false)
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;
    axios.delete(URL)
      .then(()=>getAllUsers())
      .catch((err)=>console.log(err))
  };
  

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowForm(!isShowForm)
      setIsUserIdToEdit()
    })
    .catch((err) => console.log(err))
  }

  const handleClickEdit = (data) => {
    setIsShowForm((isShowedForm) => !isShowedForm )
    reset(data)
    setIsUserIdToEdit(data.id)
  }


  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"

    axios.get(URL)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))
  }
  

 


  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <main className='font-sans'>
      <Header setIsShowForm={setIsShowForm}/>
      <Modal submit= {submit} register={register} handleSubmit ={handleSubmit} isShowForm={isShowForm} setIsShowForm={setIsShowForm}
      setIsUserIdToEdit={setIsUserIdToEdit}
      reset={reset}
      isUserIdToEdit={isUserIdToEdit}
      />
      <UsersLis users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />
    </main>
  )
}


export default App
