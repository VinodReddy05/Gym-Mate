import { useContext } from "react";
import axios from "axios";
import { Data } from "../../Context/WorkoutContext";
import "./FormStyle.css"

const Form = () => {
  const { workouts, setWorkouts, getWorkouts, form, setForm,updateForm,setUpdateForm } = useContext(Data);

  // CREATE FORM FUNCTION

  const updateFormField = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const createWorkout = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/api/workouts",
      form
    );
    setWorkouts([...workouts, response.data]);
    setForm({
      title: "",
      reps: "",
      load: "",
    });
    getWorkouts();
  };

  // UPDATE FORM FUNCTIONS

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;
    await axios.patch(`http://localhost:4000/api/workouts/${_id}`, {
      title,
      reps,
      load,
    });
    getWorkouts();
    setUpdateForm({
      _id: null,
      title: "",
      reps: "",
      load: "",
    });
  };

  return (
    <>
      {/* CREATE FORM */}
      {!updateForm._id && (
         <div className="form">
        <h1>Create Record</h1>
     
         <form  onSubmit={createWorkout}>
         <div className="field">
         <label htmlFor="">Title:</label>
         <input
           type="text"
           name="title"
           value={form.title}
           onChange={updateFormField}
         />
         </div>
        <div className="field">
        <label htmlFor="">Reps:</label>
         <input
           type="text"
           name="reps"
           value={form.reps}
           onChange={updateFormField}
         />
        </div>
        <div className="field">
        <label htmlFor="">Load(in kg)</label>
         <input
           type="text"
           name="load"
           value={form.load}
           onChange={updateFormField}
         />
        </div>
         <button>submit</button>
       </form>
      </div>
      )}
     

      {/* UPDATE FORM */}
      {updateForm._id && (
         <div className="form">
      <h1>Edit Record</h1>
  
         <form onSubmit={updateWorkout}>
        <div className="field">
        <label htmlFor="">Title :</label>
         <input
           type="text"
           name="title"
           value={updateForm.title || ""}
           onChange={handleUpdateFieldChange}
         />
        </div>
         <div className="field">
         <label htmlFor="">Reps :</label>
         <input
           type="tel"
           name="reps"
           value={updateForm.reps || ""}
           onChange={handleUpdateFieldChange}
         />
         </div>
        <div className="field">
        <label htmlFor="">Load (in kg)</label>
         <input
           type="tel"
           name="load"
           value={updateForm.load || ""}
           onChange={handleUpdateFieldChange}
         />
        </div>
         <button>Update</button>
       </form>
    </div         >
      )}
     
    </>
  );
};

export default Form;
