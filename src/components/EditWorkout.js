import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const EditWorkout = () => {

  const params = useParams()

  const [workout, setWorkout] = useState({
    _id: '',
    username: '',
    description: '',
    duration: 0,
    date: new Date()
  })

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
    fetchWorkout()
  }, [])

  const fetchWorkout = async () => {
    const res = await axios.get(`http://localhost:5000/workouts/${params.id}`)
    if (res.status === 200) {
      setWorkout({
        _id: res.data._id,
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        date: new Date(res.data.date)
      })
    }
  }

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/users/')
    let usernames = [];
    if (res.status === 200) {
      res.data.map(user => usernames.push(user.username))
    }
    setUsers(usernames)
  }


  const editWorkout = async () => {
    axios.post(`http://localhost:5000/workouts/update/${workout._id}`, workout)
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
    editWorkout(workout)
  }


  return (
    <div>
      <h3>Edit Workout Log</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          <select
            required
            className='form-control'
            value={workout.username}
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
          <input type='submit' value='Save Workout Edits' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default EditWorkout