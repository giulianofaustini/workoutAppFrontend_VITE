import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutsContext()
  
  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json})

    }
}

  return (
      <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load:(Kg)</strong> {workout.load} </p>
          <p><strong>Reps:</strong> {workout.reps} </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
   </div>
  )
}

export default WorkoutDetails