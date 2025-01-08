import { useContext, useEffect } from "react";
import {Data} from "../../Context/WorkoutContext"
import "./RecordStyle.css"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const Records = () => {

  const {workouts,getWorkouts,deleteWorkout,toogleUpdate} = useContext(Data) 
   
  // State for getting the data
  // Get Request Function
  

  useEffect(() => {
    getWorkouts();
  }, []);
  return (
    <div className="records">
      
      {workouts ? (
        workouts.map((item) => (
          <div key={item._id || item.id} className="record">
          
            <h1> {item.title}</h1>
            <p>Reps: {item.reps}</p>
            <p>Load(in kg): {item.load}</p>
            <div className="btns">
            <button className="btns1" onClick={() => {toogleUpdate(item); }}> <MdEdit/></button>
            <button className="btns1" onClick={() => deleteWorkout(item._id)}><MdDelete/></button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )} 
    </div>
  )
}

export default Records;




