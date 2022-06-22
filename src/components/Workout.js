const Workout = ({ workout }) => {
  return (
    <div>
      <h3>{workout.description}</h3>
      <p>Duration: {workout.duration}</p>
      <p>Date: {workout.date}</p>
      <p>Username: {workout.username}</p>
    </div>
  )
}

export default Workout