import { createContext, useState } from "react";
import axios from "axios";

export const Data = createContext();

const WorkoutContext = ({ children }) => {
  // GET REQUEST STATE
  const [workouts, setWorkouts] = useState(null);

  // GET REQUEST FUNCTION
  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:4000/api/workouts"); // Ensure the backend is running
    const data = response.data;
    setWorkouts(data);
    console.log(data);
  };

  //==== POST REQUEST STATE =====//
  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });

  /// ===DELETE REQUEST STATE === //
  const deleteWorkout = async (_id) => {
    await axios.delete(`http://localhost:4000/api/workouts/${_id}`);
    getWorkouts();
  };

  // === UPDATE REQUEST ===//
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  const toogleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };

  return (
    <>
      <Data.Provider
        value={{
          workouts,
          setWorkouts,
          getWorkouts,
          form,
          setForm,
          deleteWorkout,
          updateForm,
          setUpdateForm, 
          toogleUpdate,

        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default WorkoutContext;
