import { Link } from 'react-router-dom'

const Workout = ({ workout, deleteWorkout }) => {
  return (
    <div className='card'>
      <div className='card-header'>
          <h3 className='card-title'>{workout.description}</h3>
        </div>
      <div className='card-body'>
        <p className='card-text'>Duration: {workout.duration} minutes</p>
        <p className='card-text'>Date: {workout.date}</p>
        <p className='card-text'>Username: {workout.username}</p>
        <Link className='btn btn-primary mx-1' to={`/edit/${workout._id}`}>Edit</Link>
        <button className='btn btn-danger mx-1' onClick={() => deleteWorkout(workout._id)}>Delete</button>
      </div>
    </div>
  )
}

export default Workout