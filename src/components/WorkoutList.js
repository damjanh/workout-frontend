import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Workout from './Workout'

const WorkoutList = () => {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetchWorkouts()
  }, [])

  const fetchWorkouts = async () => {
    const res = await axios.get('http://localhost:5000/workouts/')
    let workoutsFromServer = [];
    if (res.status === 200) {
      res.data.map(workout => {
        workoutsFromServer.push({
          _id: workout._id,
          description: workout.description,
          duration: workout.duration,
          date: workout.date,
          username: workout.username,
        })
      })
    }

    console.log(JSON.stringify(workoutsFromServer))

    setWorkouts(workoutsFromServer)
  }

  return (
    <div>
      <h1>Workout List</h1>
      {workouts.map(workout => <Workout key={workout._id} workout={workout} />)}
    </div>
  )
}

export default WorkoutList
