import { useState } from 'react'

const CreateUser = () => {

  const [username, setUser] = useState('')

  const addUser = async (user) => {
    const res = await fetch('http://localhost:5000/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username})
        })
        // TODO: handle error
        console.log("Added User")
  }

  const onChangeUsername = (value) => {
    console.log(`Username changed to: ${value}`)
    setUser(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Submitted user:${username}`)

    addUser(username)
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