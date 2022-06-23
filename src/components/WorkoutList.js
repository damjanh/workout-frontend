import { useState, useEffect } from 'react'
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
      res.data.map(workout => (
        workoutsFromServer.push({
          _id: workout._id,
          description: workout.description,
          duration: workout.duration,
          date: workout.date,
          username: workout.username,
        })
      ))
    }

    console.log(JSON.stringify(workoutsFromServer))

    setWorkouts(workoutsFromServer)
  }

  const deleteWorkout = async (id) => {
    const res = await axios.delete(`http://localhost:5000/workouts/${id}`)
    if (res.status === 200) {
      fetchWorkouts()
    }
  }

  return (
    <div>
      <h1>Workout List</h1>
      {workouts.map(workout => <Workout key={workout._id} workout={workout} deleteWorkout={deleteWorkout}/>)}
    </div>
  )
}

export default WorkoutList
