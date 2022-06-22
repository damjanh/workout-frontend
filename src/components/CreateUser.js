import { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {

  const [username, setUser] = useState('')

  const addUser = async () => {
    axios.post('http://localhost:5000/users/add', {username: username})
    .then(res => {console.log(res.data)})
    .catch(err => {console.log(err)})
  }

  const onChangeUsername = (value) => {
    console.log(`Username changed to: ${value}`)
    setUser(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Submitted user:${username}`)

    addUser()
    setUser('')
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label>Username:</label>
          <input type='text'
            required
            className='form-control'
            value={username}
            onChange={(e) => onChangeUsername(e.target.value)}
            />
        </div>
        <div className='form-group'>
          <input type='submit' value='Create User' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default CreateUser