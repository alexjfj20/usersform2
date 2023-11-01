const UserCard = ({user, deleteUser, setInfoUpdate, handleOpenFrom}) => {

     const handleDelete = () => {
        deleteUser('/users', user.id)
     }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleOpenFrom()
    }

    return(
        <article className="articulo__userCard">

      <section className="flex-container">
        <h3>#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
  
        <ul>
  
          <li><span>Email: </span><span>{user.email}</span></li>
  
          <li><span>Birthday: </span><span>{user.birthday}</span></li>
  
        </ul>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </section>
  
      </article>     



    )
}

export default UserCard