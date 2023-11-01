import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://usercrudent1-dev-ztfg.3.us-1.fl0.io'
  const [users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect(() =>{
    getUsers('/user')

  }, [])
 console.log(users)

const handleOpenFrom = () => {
    setCloseForm(false)

}

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleOpenFrom} className='formuser__btn  formuser__btn2' >Open Form</button>

      <FormUser 
      createUser={createUser}
      infoUpdate={infoUpdate}
      updateUser={updateUser}
      setInfoUpdate={setInfoUpdate}
      closeForm={closeForm}
      setCloseForm={setCloseForm}
      />
      <div>
        {
            users?.map(user => (
              <UserCard 
                key={user.id}
                deleteUser={deleteUser}
                user={user}
                setInfoUpdate={setInfoUpdate}
                handleOpenFrom={handleOpenFrom}
              />
            ))

        }
     </div>   
    </div>
  )
}

export default App
