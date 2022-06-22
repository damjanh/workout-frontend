import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const CreateWorkout = () => {

  const [workout, setWorkout] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date()
  })

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setUsers(['John', 'Jane', 'Joe'])
  }, [])

  const addWorkout = async () => {
    axios.post('http://localhost:5000/workouts/add', workout)
    .then(res => {console.log(res.data)})
    .catch(err => {console.log(err)})

    navigate('/')
  }

  const onChangeUsername = (value) => {
    console.log(`Username changed to: ${value}`)
    setWorkout({...workout, username: value})
  }

  const onChangeDescription = (value) => {
    console.log(`Description changed to: ${value}`)
    setWorkout({...workout, description: value})
  }

  const onChangeDuration = (value) => {
    console.log(`Duration changed to: ${value}`)
    setWorkout({...workout, duration: value})
  }

  const onChangeDate = (value) => {
    console.log(`Date changed to: ${value}`)
    setWorkout({...workout, date: value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Submitted workout:${JSON.stringify(workout)}`)
    addWorkout(workout)
  }


  return (
    <div>
      <h3>Create New Workout Log</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          <select
            required
            className='form-control'
            value={workout.users}
            onChange={(e) => onChangeUsername(e.target.value)}>
              {
                users.map(user => (
                  <option key={user} value={user}>{user}</option>
                ))
              }
            </select>
        </div>
        <div className='form-group'>
          <label>Description:</label>
          <input type='text'
            required
            className='form-control'
            value={workout.description}
            onChange={(e) => onChangeDescription(e.target.value)}
            />
        </div>
        <div className='form-group'>
          <label>Duration:</label>
          <input type='text'
            required
            className='form-control'
            value={workout.duration}
            onChange={(e) => onChangeDuration(e.target.value)}
            />
        </div>
        <div className='form-group'>
          <label>Date:</label>
          <div>
            <DatePicker
              selected={workout.date}
              onChange={(date) => onChangeDate(date)}
            />
          </div>
        </div>
        <div className='form-group'>
          <input type='submit' value='Create Workout' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default CreateWorkout